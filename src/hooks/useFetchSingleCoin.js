import { useEffect, useState } from 'react'
import { getSingleCoin } from '../services/getCoinsMarket'

export const useFetchSingleCoin = (query) => {
  const [datos, setDatos] = useState({
    loading: true,
    data: {}
  })

  useEffect(() => {
    getSingleCoin(query).then((data) => {
      setDatos({
        loading: false,
        data
      })
    })
  }, [query])

  return datos
}
