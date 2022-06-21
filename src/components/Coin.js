import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'
import {
  TableRow,
  TableCell
} from '@material-ui/core'

const useStyles = makeStyles({
  row: {
    backgroundColor: '#16171a',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#131111'
    },
    fontFamily: 'Montserrat'
  }
})
export function numberWithCommas (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const Coin = ({ id, name, image, symbol, current_price: currentPrice, price_change_percentage_24h: priceChangePercentage24, market_cap: marketCap }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const profit = priceChangePercentage24 > 0
  return (
    <TableRow
      className={classes.row}
      key={id}
      align='center'
      onClick={() => navigate(`/coin/${id}`)}
    >
      <TableCell
        component='th'
        scope='row'
        style={{
          display: 'flex',
          gap: 15
        }}
      >
        <img
          src={image}
          alt={name}
          height='50'
          style={{ marginBottom: 10 }}
        />
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <span
            style={{
              textTransform: 'uppercase',
              fontSize: 22
            }}
          >
            {symbol}
          </span>
          <span style={{ color: 'darkgrey' }}>
            {name}
          </span>
        </div>
      </TableCell>
      <TableCell>
        {numberWithCommas(currentPrice.toFixed(2))}
      </TableCell>
      <TableCell
        style={{
          color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
          fontWeight: 500
        }}
      >
        {profit && '+'}
        {priceChangePercentage24.toFixed(2)}%
      </TableCell>
      <TableCell>
        {numberWithCommas(
          marketCap.toString().slice(0, -6)
        )}
        M
      </TableCell>
    </TableRow>
  )
}
