import { auth } from '../config/fire-config'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {
  AccountCircleRounded,
  ExitToAppOutlined,
  Phone,
} from '@material-ui/icons'
import Link from 'next/link'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    marginLeft: 4,
  },
  contact: {
    marginRight: 24,
  },
  btnLogin: {
    display: user => {
      if (user) {
        return 'none'
      }
      return 'block'
    },
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  btnLogout: {
    display: user => {
      if (user) {
        return 'block'
      }
      return 'none'
    },
  },
}))

export default function Navbar() {
  const [user, setUser] = useState(false)

  const classes = useStyles(user)
  const router = useRouter()

  const handleClick = () => {
    auth
      .signOut()
      .then(() => {
        // console.log('logout')
        router.push('/')
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
    return () => {
      setUser({})
    }
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Image src='/soap_icon.png' width={48} height={48} alt='soap icon' />
          <Typography variant='h6' className={classes.title}>
            <Link href='/'>
              <a> Virgo Natural Creations</a>
            </Link>
          </Typography>
          <Typography variant='h6' className={classes.contact}>
            Contact Us (555) 555 5555
          </Typography>
          {!user ? (
            <Button
              className={classes.btnLogin}
              onClick={() => router.push('/login')}
              color='inherit'
              variant='outlined'
              startIcon={<AccountCircleRounded />}
            >
              Login
            </Button>
          ) : (
            <Button
              className={classes.btnLogout}
              onClick={handleClick}
              color='inherit'
              startIcon={<ExitToAppOutlined />}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
