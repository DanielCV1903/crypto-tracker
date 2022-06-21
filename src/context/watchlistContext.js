import { createContext, useState, useEffect } from 'react'

export const WatchListContext = createContext()

export const WatchListContextProvider = props => {
  const [watchList, setWatchList] = useState(
    // eslint-disable-next-line no-undef
    localStorage.getItem('watchList')?.split(',') || [
      'bitcoin',
      'ethereum',
      'ripple',
      'litecoin'
    ]
  )
  const handleDeleteCoin = (coin) => {
    const watchListFilter = watchList.filter((n) => { return n !== coin })
    setWatchList(watchListFilter)
  }
  const handleAddCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin])
    }
  }
  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('watchList', watchList)
  }, [watchList])
  return (
    <WatchListContext.Provider value={{ watchList, handleDeleteCoin, handleAddCoin }}>
      {props.children}
    </WatchListContext.Provider>

  )
}
