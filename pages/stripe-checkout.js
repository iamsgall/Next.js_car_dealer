import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
// import CheckoutForm from '../components/CheckoutForm'
import dynamic from 'next/dynamic'
const CheckoutForm = dynamic(() => import('../components/CheckoutForm'), {
  ssr: false,
})

const StripeCheckout = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  )

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default StripeCheckout
