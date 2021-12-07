import React from 'react'
import { forwardRef } from 'react'
import { useLogout } from 'react-admin'
import MenuItem from '@material-ui/core/MenuItem'
import ExitIcon from '@material-ui/icons/PowerSettingsNew'
import { useRouter } from 'next/router'
import { auth } from '../../config/fire-config'

const LogoutBtn = forwardRef((prop, ref) => {
  const logout = useLogout()
  const router = useRouter()
  const handleClick = () => {
    auth
      .signOut()
      .then(() => {
        // console.log('logout')
        logout()
        router.push('/')
      })
      .catch(err => {
        console.error(err)
      })
    router.push('/')
  }
  return (
    <MenuItem onClick={handleClick} ref={ref}>
      <ExitIcon /> Logout
    </MenuItem>
  )
})

export default LogoutBtn
