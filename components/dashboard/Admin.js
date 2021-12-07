import React, { useEffect, useState } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import { auth, firebaseConfig } from '../../config/fire-config'
import HomeDashboard from './HomeDashboard.js'
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase'
import SoapIcon from '@mui/icons-material/Soap'

import { SoapsList, SoapEdit, SoapCreate } from './cars.js'
import MyLogoutBtn from './MyLogoutBtn'
import MyLayout from './MyLayout'

export default function dashboard() {
  const options = {}
  const dataProvider = FirebaseDataProvider(firebaseConfig, options)
  // const authProvider = FirebaseAuthProvider(firebaseConfig, options)

  const authProvider = {
    // authentication
    login: params => Promise.resolve(),
    checkError: error => Promise.resolve(),
    checkAuth: params => Promise.resolve(),
    logout: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: params => Promise.resolve(),
  }

  // console.log(
  //   'current_user',
  //   auth.currentUser.uid,
  //   auth.currentUser.displayName,
  //   auth.currentUser.photoURL
  // )

  return (
    <Admin
      loginPage={false}
      logoutButton={MyLogoutBtn}
      dashboard={HomeDashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={MyLayout}
    >
      <Resource
        name='soaps'
        list={SoapsList}
        icon={SoapIcon}
        create={SoapCreate}
        edit={SoapEdit}
      />
    </Admin>
  )
}
