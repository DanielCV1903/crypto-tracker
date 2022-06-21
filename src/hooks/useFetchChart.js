import { useEffect, useState } from 'react'
import { getChartCoins } from '../services/getCoinsMarket'

export const useFetchChart = (query, day) => {
  const [datos, setDatos] = useState({
    loading: true,
    data: []
  })

  useEffect(() => {
    getChartCoins(query, day).then((data) => {
      setDatos({
        loading: false,
        data
      })
    })
  }, [query, day])

  return datos
}
