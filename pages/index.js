import { Grid, Paper } from '@material-ui/core'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layout.js'))
import { makeStyles } from '@material-ui/core/styles'
import CardCarContainer from '../containers/CardCarContainer.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))
export default function Home() {
  const classes = useStyles()
  return (
    <Layout title='test' description='test'>
      <div className={classes.root}>
        <Grid container align='center'>
          <CardCarContainer />
        </Grid>
      </div>
    </Layout>
  )
}
/**
 *
 */
