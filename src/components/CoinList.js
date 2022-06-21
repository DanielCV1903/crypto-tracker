import React, { useContext } from 'react'
import {
  Container,
  createTheme,
  ThemeProvider,
  TableContainer,
  Paper,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'
import { useFetch } from '../hooks/useFetchMarketCoins'
import { Coin } from './Coin'
import { WatchListContext } from '../context/watchlistContext'

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    type: 'dark'
  }
})

export const CoinList = () => {
  const { watchList, handleDeleteCoin } = useContext(WatchListContext)
  const { data: coins, loading } = useFetch(watchList)

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: 'center' }}>
        <TableContainer component={Paper}>
          {loading
            ? (
              <LinearProgress style={{ backgroundColor: 'gold' }} />
              )
            : (
              <Table aria-label='simple table'>
                <TableHead style={{ backgroundColor: '#EEBC1D' }}>
                  <TableRow>
                    {['COIN', 'PRICE', '24h CHANGE', 'MARKET CAP'].map((head) => (
                      <TableCell
                        style={{
                          color: 'black',
                          fontWeight: '700',
                          fontFamily: 'Montserrat'
                        }}
                        key={head}
                        align={head === 'COIN' ? 'center' : 'left'}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {coins
                    ?.map((row) => {
                      return (
                        <Coin key={row.id} {...row} handleDeleteCoin={handleDeleteCoin} />
                      )
                    })}
                </TableBody>
              </Table>
              )}
        </TableContainer>

      </Container>
    </ThemeProvider>
  )
}
