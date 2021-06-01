import React from 'react'
import { AppBar } from 'react-admin'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
})

export default function MyAppBar(props) {
  const classes = useStyles()
  return (
    <AppBar {...props}>
      <Typography
        variant='h6'
        color='inherit'
        className={classes.title}
        id='react-admin-title'
      >
        Your Website
      </Typography>
      {/* <Logo/> */}
      <span className={classes.spacer}></span>
    </AppBar>
  )
}
