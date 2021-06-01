import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import {
  AvTimerOutlined,
  CheckCircleOutlined,
  DirectionsCarOutlined,
  LocalGasStationOutlined,
  LoyaltyOutlined,
  RoomOutlined,
} from '@material-ui/icons'
import { red } from '@material-ui/core/colors'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '5%',
  },
  iconPlusText: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  price: {
    color: red.A700,
  },
}))

export default function DetailsCar({
  brand,
  model,
  series,
  generation,
  type_car,
  year,
  color,
  engineering,
  fuel_type,
  transmission,
  miles,
  pictures,
  available,
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {/* {pictures[0].src ? ( */}
              <img className={classes.img} alt='complex' src='' />
              {/* ) : (
                <CircularProgress />
              )} */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography variant='subtitle1'>{brand}</Typography>
                <Typography variant='body2' style={{ padding: 2 }} gutterBottom>
                  {`${model} • ${series} • ${generation}`}
                </Typography>
                <Typography
                  variant='body2'
                  style={{ padding: '3px 0' }}
                  color='textSecondary'
                  className={classes.iconPlusText}
                >
                  <DirectionsCarOutlined fontSize='small' color='secondary' />
                  {`${type_car} `}
                </Typography>{' '}
                <Typography
                  variant='body2'
                  style={{ padding: '3px 0' }}
                  color='textSecondary'
                  className={classes.iconPlusText}
                >
                  <LocalGasStationOutlined fontSize='small' color='secondary' />
                  {`${fuel_type} `}
                </Typography>
                <Typography
                  variant='body2'
                  style={{ padding: '3px 0' }}
                  color='textSecondary'
                  className={classes.iconPlusText}
                >
                  <AvTimerOutlined fontSize='small' color='secondary' />
                  {` ${transmission}`}
                </Typography>
                <Typography
                  variant='body2'
                  style={{ padding: '3px 0' }}
                  color='textSecondary'
                  className={classes.iconPlusText}
                >
                  <RoomOutlined fontSize='small' color='secondary' />
                  {`${miles} mi`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='subtitle2'
                  className={classes.iconPlusText}
                >
                  <CheckCircleOutlined fontSize='small' color='secondary' />
                  Available
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='h5' className={classes.price}>
                <b>$20,000</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
