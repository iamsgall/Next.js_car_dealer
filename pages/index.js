import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

import { Grid, Paper, Typography } from '@material-ui/core'
const Layout = dynamic(() => import('../components/Layout.js'))
import { makeStyles } from '@material-ui/core/styles'
// import CardSoapContainer from '../containers/CardSoapContainer.js'
import dynamic from 'next/dynamic'
const CardSoapContainer = dynamic(() =>
  import('../containers/CardSoapContainer.js', {
    ssr: false,
  })
)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
)

export default function PreviewPage() {
  const classes = useStyles()

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
    }
  }, [])

  return (
    <Layout
      title='Virgo Natural Creations'
      description='Natural Soap e-commerce by Virgo Natural Creations'
    >
      <div className={classes.root}>
        <Grid container align='center'>
          <CardSoapContainer />
        </Grid>
      </div>
    </Layout>
  )
}
