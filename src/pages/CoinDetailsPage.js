import { useParams } from 'react-router'
import { useFetchSingleCoin } from '../hooks/useFetchSingleCoin'
import { LinearProgress, makeStyles, Typography } from '@material-ui/core'
import { numberWithCommas } from '../components/Coin'
import { CoinData } from '../components/CoinData'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  sidebar: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25,
    borderRight: '2px solid grey'
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Montserrat'
  },
  marketData: {
    alignSelf: 'start',
    padding: 25,
    paddingTop: 10,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'start'
    }
  }
}))

export const CoinDetailsPage = () => {
  const { id } = useParams()
  const classes = useStyles()
  const { data: coinData, loading: loadingData } = useFetchSingleCoin(id)
  return (
    <div className={classes.container}>
      {loadingData
        ? (
          <LinearProgress style={{ backgroundColor: 'gold' }} />
          )
        : (
          <>
            <div
              className={classes.sidebar}
            >
              <img
                src={coinData?.image.large}
                alt={coinData?.name}
                height='200'
                style={{ marginBottom: 20 }}
              />
              <Typography variant='h3' className={classes.heading}>
                {coinData?.name}
              </Typography>
              <div className={classes.marketData}>
                <span style={{ display: 'flex' }}>
                  <Typography variant='h5' className={classes.heading}>
                    Rank:
                  </Typography>
                &nbsp; &nbsp;
                  <Typography
                    variant='h5'
                    style={{
                      fontFamily: 'Montserrat'
                    }}
                  >
                    {numberWithCommas(coinData?.market_cap_rank)}
                  </Typography>
                </span>

                <span style={{ display: 'flex' }}>
                  <Typography variant='h5' className={classes.heading}>
                    Current Price:
                  </Typography>
            &nbsp; &nbsp;
                  <Typography
                    variant='h5'
                    style={{
                      fontFamily: 'Montserrat'
                    }}
                  >
                    ${numberWithCommas(
                    coinData?.market_data.current_price.usd
                  )}
                  </Typography>
                </span>
                <span style={{ display: 'flex' }}>
                  <Typography variant='h5' className={classes.heading}>
                    Market Cap:
                  </Typography>
            &nbsp; &nbsp;
                  <Typography
                    variant='h5'
                    style={{
                      fontFamily: 'Montserrat'
                    }}
                  >
                    {numberWithCommas(
                      coinData?.market_data.market_cap.usd
                        .toString()
                        .slice(0, -6)
                    )}
                    M
                  </Typography>
                </span>
                <span style={{ display: 'flex' }}>
                  <Typography variant='h5' className={classes.heading}>
                    Circulating Supply:
                  </Typography>
            &nbsp; &nbsp;
                  <Typography
                    variant='h5'
                    style={{
                      fontFamily: 'Montserrat'
                    }}
                  >
                    {numberWithCommas(coinData?.market_data.circulating_supply)}

                  </Typography>
                </span>
                <span style={{ display: 'flex' }}>
                  <Typography variant='h5' className={classes.heading}>
                    Price Change 24h:
                  </Typography>
            &nbsp; &nbsp;
                  <Typography
                    variant='h5'
                    style={{
                      fontFamily: 'Montserrat'
                    }}
                  >
                    {coinData?.market_data.price_change_24h.toFixed(3)}
                  </Typography>
                </span>
              </div>
            </div>
            <CoinData coinData={coinData} />
          </>
          )}
    </div>
  )
}
