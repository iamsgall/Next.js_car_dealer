import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
// import CardSoap from '../components/CardSoap'
import dynamic from 'next/dynamic'
const CardSoap = dynamic(() =>
  import('../components/CardSoap', {
    ssr: false,
  })
)
import { db } from '../config/fire-config'

export default function CardSoapContainer() {
  const [soaps, setSoaps] = useState([])

  const getSoaps = async () => {
    db.collection('soaps')
      .orderBy('createdate', 'desc')
      .onSnapshot(snap => {
        const docs = []
        snap.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id })
        })
        setSoaps(docs)
      })
  }

  useEffect(() => {
    getSoaps()
    return () => {
      setSoaps({})
    }
  }, [])

  return (
    <>
      {soaps.map(soap => (
        <Grid key={soap.id} item xs={12} sm={6} md={4} lg={3}>
          <CardSoap
            id={soap.id}
            name={soap.name}
            type={soap.type}
            color={soap.color}
            quantity={soap.quantity}
            price_current={soap.price_current}
            price_before={soap.price_before}
            pictures={soap.pictures}
            available={soap.available}
          ></CardSoap>
        </Grid>
      ))}
    </>
  )
}

// export
