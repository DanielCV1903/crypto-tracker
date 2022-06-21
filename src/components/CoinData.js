import React, { useState } from 'react'
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core'
import { useFetchChart } from '../hooks/useFetchChart'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { chartDays } from '../utils/config'
import { SelectButton } from './SelectButton'

ChartJS.register(...registerables)

const useStyles = makeStyles((theme) => ({
  container: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: 0,
      padding: 20,
      paddingTop: 0
    }
  }
}))

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    type: 'dark'
  }
})

export const CoinData = ({ coinData }) => {
  const classes = useStyles()
  // eslint-disable-next-line no-unused-vars
  const [days, setDays] = useState(1)
  const { data: { prices: historicData }, loading } = useFetchChart(coinData.id, days)
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData | loading
          ? (
            <CircularProgress
              style={{ color: 'gold' }}
              size={250}
              thickness={1}
            />
            )
          : (
            <>
              <Line
                data={{
                  labels: historicData.map((coin) => {
                    const date = new Date(coin[0])
                    const time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`
                    return days === 1 ? time : date.toLocaleDateString()
                  }),

                  datasets: [
                    {
                      data: historicData.map((coin) => coin[1]),
                      label: `Price ( Past ${days} Days )`,
                      borderColor: '#EEBC1D'
                    }
                  ]
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1
                    }
                  }
                }}
              />
              <div
                style={{
                  display: 'flex',
                  marginTop: 20,
                  justifyContent: 'space-around',
                  width: '100%'
                }}
              >
                {chartDays.map((day) => (
                  <SelectButton
                    key={day.value}
                    onClick={() => {
                      setDays(day.value)
                    }}
                    selected={day.value === days}
                  >
                    {day.label}
                  </SelectButton>
                ))}
              </div>
            </>

            )}
      </div>
    </ThemeProvider>
  )
}
