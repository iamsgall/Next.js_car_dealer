const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
  const { lookup_key } = req.body
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
          allowed_countries: ['US'],
        },
        billing_address_collection: 'auto',
        shipping_options: [
          {
            shipping_rate: 'shr_1K2dKGIJApp7JYOGEQg9WMeE',
          },
        ],
        line_items: [
          {
            price: lookup_key,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 20,
            },
            quantity: 1,
          },
        ],
        phone_number_collection: {
          enabled: true,
        },
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: true },
      })

      res.redirect(303, session.url)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
