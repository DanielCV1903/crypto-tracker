import { useEffect, useState } from 'react'
import { getCoinsMarket } from '../services/getCoinsMarket'

export const useFetch = (query) => {
  const [datos, setDatos] = useState({
    loading: true,
    data: []
  })

  useEffect(() => {
    if (query.length > 0) {
      getCoinsMarket(query.join()).then((data) => {
        setDatos({
          loading: false,
          data
        })
      })
    } else {
      setDatos({
        loading: false,
        data: []
      })
    }
  }, [query])

  return datos
}
