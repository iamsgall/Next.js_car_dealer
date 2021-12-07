import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const StripeCheckoutForm = ({ id }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
      // toast.success('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
      // toast.info(
      //   'Order canceled -- continue to shop around and checkout when you’re ready.'
      // )
    }
  }, [])

  return (
    <>
      {/* <ToastContainer theme='light' /> */}
      <form action='/api/stripe-payment-intent' method='POST'>
        {/* Add a hidden field with the lookup_key of your Price */}
        <input type='hidden' name='lookup_key' value={id} />

        <Button
          color='secondary'
          variant='contained'
          // className={classes.btn}
          endIcon={<AddShoppingCart />}
          type='submit'
          role='link'
          id='checkout-and-portal-button'
          style={{
            marginTop: 14,
          }}
        >
          Checkout
        </Button>
      </form>
    </>
  )
}

export default StripeCheckoutForm
