import React from 'react'
import dynamic from 'next/dynamic'
import { auth } from '../config/fire-config'

const Admin = dynamic(() => import('../components/dashboard/Admin.js'), {
  ssr: false,
})

export default function Dashboard() {
  auth.onAuthStateChanged(user => {
    // console.log(user)
  })

  return <Admin />
}
