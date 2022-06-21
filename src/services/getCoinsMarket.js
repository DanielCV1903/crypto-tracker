import { API_URL } from '../utils/config'

export const getCoinsMarket = async (query) => {
  try {
    const response = await fetch(`${API_URL}coins/markets?vs_currency=usd&ids=${query}`)
    const data = await response.json()
    return data
  } catch {
    console.log('Fallo en la ejecución del servicio')
  }
}
export const getSingleCoin = async (query) => {
  try {
    const response = await fetch(`${API_URL}coins/${query}`)
    const data = await response.json()
    return data
  } catch {
    console.log('Fallo en la ejecución del servicio')
  }
}
export const getChartCoins = async (query, day) => {
  try {
    const response = await fetch(`${API_URL}coins/${query}/market_chart?vs_currency=usd&days=${day}`)
    const data = await response.json()
    return data
  } catch {
    console.log('Fallo en la ejecución del servicio')
  }
}
