import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CardCar from '../components/CardCar'
import { db } from '../config/fire-config'

export default function CardCarContainer() {
  const [cars, setCars] = useState([])

  const getCars = async () => {
    db.collection('cars').onSnapshot(snap => {
      const docs = []
      snap.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setCars(docs)
    })
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <>
      {cars.map(car => (
        <Grid key={car.id} item xs={12} sm={6} md={4} lg={3}>
          <CardCar
            id={car.id}
            brand={car.brand}
            model={car.model}
            generation={car.generation}
            year={car.year}
            pictures={car.pictures}
            miles={car.miles}
            color={car.color}
            available={car.available}
            price_before={car.price_before}
            price_current={car.price_current}
          />
        </Grid>
      ))}
    </>
  )
}
