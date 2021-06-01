import React from 'react'
import ImageGallery from 'react-image-gallery'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Layout from '../../components/Layout'
import DetailsCarContainer from '../../containers/DetailsCarContainer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '20px 10px',
  },
}))

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

export default function Details() {
  const classes = useStyles()

  return (
    <Layout title='test' description='test' t>
      <div className={classes.root}>
        <Grid container spacing={3} alignItems='center' justify='center'>
          <Grid item xs={12} sm={8} md={8}>
            <DetailsCarContainer />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems='center' justify='center'>
          <Grid item xs={12} sm={8} md={8}>
            <Paper>
              <ImageGallery
                items={images}
                lazyLoad={true}
                showBullets={true}
                showIndex={true}
                slideOnThumbnailOver={true}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}
