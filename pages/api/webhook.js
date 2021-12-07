import { buffer } from 'micro'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
})
const webhookSecret = process.env.STRIPE_WEBHOOK_KEY

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    if (event.type === 'charge.succeeded') {
      const charge = event.data.object
    } else {
      console.warn(`Unhandled event type: ${event.type}`)
    }

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object
        // Then define and call a function to handle the event payment_intent.succeeded
        break
      // ... handle other event types
      default:
      // console.log(`Unhandled event type ${event.type}`)
    }

    // if ('checkout.session.completed' === stripeEvent.type) {
    //   const session = stripeEvent.data.object
    //   console.log('payment success', session)
    // }
    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default handler
