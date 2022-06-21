import React, { useState, useContext } from 'react'
import { WatchListContext } from '../context/watchlistContext'

export const AddCoin = () => {
  const [isActive, setIsActive] = useState(false)
  const { handleAddCoin, watchList } = useContext(WatchListContext)
  const availableCoins = [
    'bitcoin',
    'ethereum',
    'ripple',
    'tether',
    'bitcoin-cash',
    'litecoin',
    'eos',
    'okb',
    'tezos',
    'cardano'
  ]
  const updatedCoins = availableCoins.filter(coin => !watchList.includes(coin))

  const handleClick = (coin) => {
    handleAddCoin(coin)
    setIsActive(false)
  }

  return (
    <div style={{
      marginLeft: '335px',
      marginBottom: '10px'
    }}
    >
      <button
        onClick={() => setIsActive(!isActive)}
        className='btn btn-outline-warning'
        type='button'
      >
        Add Coin
      </button>
      <div className={isActive ? 'dropdown-menu show' : 'dropdown-menu'}>
        {updatedCoins.map((el) => {
          return (
            <a
              onClick={() => handleClick(el)}
              href='#'
              className='dropdown-item'
              key={el}
            >
              {el}
            </a>
          )
        })}
      </div>
    </div>
  )
}
