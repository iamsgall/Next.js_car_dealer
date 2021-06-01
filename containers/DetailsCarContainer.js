import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { db } from '../config/fire-config'
import DetailsCar from '../components/DetailsCar'

export default function DetailsCarContainer() {
  const router = useRouter()
  const cid = router.query.cid
  console.log(cid)

  const [detailsCar, setDetailsCar] = useState([])

  const getOneCar = async () => {
    db.collection('cars')
      .doc(cid)
      .get()
      .then(doc => {
        if (doc.exists) {
          //   console.log('Document data:', doc.data())
          setDetailsCar(doc.data())
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      })
      .catch(error => {
        console.log('Error getting document:', error)
      })
  }

  console.log(detailsCar)

  useEffect(() => {
    getOneCar()
  }, [])
  return (
    <>
      <DetailsCar
        brand={detailsCar.brand}
        model={detailsCar.model}
        series={detailsCar.series}
        generation={detailsCar.generation}
        type_car={detailsCar.type_car}
        year={detailsCar.year}
        color={detailsCar.color}
        engineering={detailsCar.engineering}
        fuel_type={detailsCar.fuel_type}
        transmission={detailsCar.transmission}
        miles={detailsCar.miles}
        pictures={detailsCar.pictures}
        available={detailsCar.available}
      />
    </>
  )
}
