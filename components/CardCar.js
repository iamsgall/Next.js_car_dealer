import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {
  amber,
  blue,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {
  Box,
  Button,
  CardActionArea,
  CircularProgress,
  Grid,
  Link,
} from '@material-ui/core'
import {
  AvTimerOutlined,
  CheckCircleOutlined,
  FormatColorFillOutlined,
  PaletteOutlined,
  Phone,
  Photo,
} from '@material-ui/icons'
import { useRouter } from 'next/router'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

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
  avatar: {
    backgroundColor: () => {
      switch (getRandomInt(0, 17)) {
        case 0:
          return red[400]

        case 1:
          return pink[400]
        case 2:
          return purple[400]
        case 3:
          return deepPurple[400]
        case 4:
          return indigo[400]
        case 5:
          return blue[400]
        case 6:
          return lightBlue[400]
        case 7:
          return cyan[400]
        case 8:
          return teal[400]
        case 9:
          return green[400]
        case 10:
          return lightGreen[400]
        case 11:
          return lime[400]
        case 12:
          return yellow[400]
        case 13:
          return amber[400]
        case 14:
          return orange[400]
        case 15:
          return deepOrange[400]
        case 16:
          return brown[400]

        default:
          break
      }
    },
  },
  price: {
    color: red.A700,
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
}))

export default function CardCar({
  brand,
  model,
  generation,
  year,
  pictures,
  miles,
  color,
  available,
  price_before,
  price_current,
  id,
}) {
  const classes = useStyles()
  const router = useRouter()

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={() => router.push(`/details/${id}`)}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                {brand[0].toUpperCase()}
              </Avatar>
            }
            title={brand}
            subheader={`${model} - ${generation} - ${year}`}
          />
          {pictures[0].src ? (
            <CardMedia
              className={classes.media}
              image={pictures[0].src}
              title={`${brand} ${model}`}
            />
          ) : (
            <CircularProgress />
          )}
          <Typography
            color='secondary'
            variant='body2'
            className={classes.link}
            onClick={() => router.push(`/details/${id}`)}
          >
            View gallery
          </Typography>
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
                    <AvTimerOutlined
                      fontSize='small'
                      style={{ marginRight: 4 }}
                      color='secondary'
                    />
                    {miles} mi
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
                    exterior
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
                    <Phone
                      fontSize='small'
                      style={{ marginRight: 4 }}
                      color='secondary'
                    />
                    +1 (555) 555-5555
                  </Typography>
                </Box>
              </Grid>

              <Typography
                variant='body2'
                color='textSecondary'
                component='span'
              >
                <span>Before </span>
                <s>${price_before}</s>
              </Typography>
            </Grid>
            <Grid>
              <Box display='flex' justifyContent='flex-end'>
                <Typography
                  variant='body1'
                  color='primary'
                  component='p'
                  gutterBottom
                  className={classes.price}
                >
                  <b>Price ${price_current}</b>
                </Typography>
              </Box>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
