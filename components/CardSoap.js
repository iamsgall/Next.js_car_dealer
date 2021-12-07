import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'
import { green } from '@material-ui/core/colors'

import { Box, CircularProgress, Grid } from '@material-ui/core'
import {
  CheckCircleOutlined,
  FormatColorFillOutlined,
} from '@material-ui/icons'
import { useRouter } from 'next/router'
import { ProductionQuantityLimits, Soap } from '@mui/icons-material'
import { loadStripe } from '@stripe/stripe-js'
// import CheckoutForm from './CheckoutForm'
import dynamic from 'next/dynamic'
const CheckoutForm = dynamic(() =>
  import('./CheckoutForm', {
    ssr: false,
  })
)

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 320,
    marginTop: 20,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  price: {
    color: green.A800,
  },
  iconPlusText: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  link: {
    marginTop: theme.spacing(1),
    textTransform: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  btn: {
    marginTop: 14,
  },
}))

export default function CardSoap({
  id,
  name,
  type,
  color,
  quantity,
  price_current,
  price_before,
  pictures,
  available,
}) {
  const classes = useStyles()
  const router = useRouter()

  price_before = parseFloat(price_before).toFixed(2)
  price_current = parseFloat(price_current).toFixed(2)
  type = type[0].toUpperCase() + type.substr(1)

  // console.log(id)
  // console.log(quantity)

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  )

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={
            <Typography style={{ textAlign: 'center' }} variant={'body1'}>
              {name}
            </Typography>
          }
          subheader={
            <Typography
              color={'textSecondary'}
              style={{ textAlign: 'center' }}
              variant={'body2'}
            >
              {'Virgo Natural Creations'}
            </Typography>
          }
        />
        {pictures[0].src ? (
          <CardMedia className={classes.media} image={pictures[0].src} />
        ) : (
          <CircularProgress />
        )}

        {/* <Elements stripe={stripePromise}> */}
        <CheckoutForm id={id} />
        {/* </Elements> */}

        <CardContent>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
          >
            <Grid item>
              <Box m={0.3}>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='span'
                  className={classes.iconPlusText}
                  style={{ padding: '2px 0' }}
                >
                  <Soap
                    fontSize='small'
                    style={{ marginRight: 4, color: '#198077' }}
                    // color='#fff'
                  />
                  {type}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
          >
            <Grid item>
              <Box m={0.3}>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='span'
                  className={classes.iconPlusText}
                  style={{ textTransform: 'capitalize', padding: '2px 0' }}
                >
                  <FormatColorFillOutlined
                    fontSize='small'
                    style={{ marginRight: 4 }}
                    color='secondary'
                  />
                  {color}
                </Typography>{' '}
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='span'
                  className={classes.iconPlusText}
                  style={{ padding: '2px 0' }}
                >
                  color
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
          >
            <Grid item>
              <Box m={0.3}>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='span'
                  className={classes.iconPlusText}
                  style={{ padding: '2px 0' }}
                >
                  <CheckCircleOutlined
                    fontSize='small'
                    style={{ marginRight: 4 }}
                    color='secondary'
                  />
                  {available ? 'Available' : 'Not Available'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <Grid item>
              <Box m={0.3}>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='span'
                  className={classes.iconPlusText}
                >
                  <ProductionQuantityLimits
                    fontSize='small'
                    style={{ marginRight: 4, color: '#197C73' }}
                    color='secondary'
                    variant='but'
                  />
                  {quantity} Quantity
                </Typography>
              </Box>
            </Grid>
            <Typography variant='body2' color='textSecondary' component='span'>
              <s>${price_before} USD</s>
            </Typography>
          </Grid>
          <Grid>
            <Box display='flex' justifyContent='flex-end'>
              <Typography
                variant='body1'
                color='secondary'
                component='p'
                gutterBottom
                className={classes.price}
              >
                <b>${price_current} USD</b>
              </Typography>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
