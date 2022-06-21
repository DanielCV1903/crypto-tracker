import { CoinSummaryPage } from './pages/CoinSummaryPage'
import { CoinDetailsPage } from './pages/CoinDetailsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { WatchListContextProvider } from './context/watchlistContext'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh'
  }
}))
function App () {
  const classes = useStyles()
  return (
    <>
      <WatchListContextProvider>
        <Router>
          <div className={classes.App}>
            <Header />
            <Routes>
              <Route exact path='/' element={<CoinSummaryPage />} />
              <Route exact path='/coin/:id' element={<CoinDetailsPage />} />
            </Routes>

          </div>
        </Router>
      </WatchListContextProvider>
    </>
  )
}

export default App
