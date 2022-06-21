import React from 'react'
import { AddCoin } from '../components/AddCoin'
import { CoinList } from '../components/CoinList'

export const CoinSummaryPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}
    >
      <AddCoin />
      <CoinList />
    </div>
  )
}
