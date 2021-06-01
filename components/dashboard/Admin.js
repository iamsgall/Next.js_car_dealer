import React, { useEffect, useState } from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import { auth, firebaseConfig } from '../../config/fire-config'
import HomeDashboard from './HomeDashboard.js'
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase'
import CarIcon from '@material-ui/icons/DirectionsCar'

import { CarsList, CarEdit, CarCreate } from './cars.js'
import MyLogoutBtn from './MyLogoutBtn'
import MyLayout from './MyLayout'
// import { AuthProvider } from './authProvider.ts'

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

  console.log(
    'current_user',
    auth.currentUser.uid,
    auth.currentUser.displayName,
    auth.currentUser.photoURL
  )

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
        name='cars'
        list={CarsList}
        icon={CarIcon}
        create={CarCreate}
        edit={CarEdit}
      />
    </Admin>
  )
}
