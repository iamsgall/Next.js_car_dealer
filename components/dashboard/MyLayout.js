import React from 'react'
import { Layout } from 'react-admin'
// import dynamic from 'next/dynamic'
import MyAppBar from './MyAppBar'
// const MyAppBar = dynamic(() =>
//   import('./MyAppBar', {
//     ssr: false,
//   })
// )
// import MyAppBar from './MyAppBar'

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />

export default MyLayout
