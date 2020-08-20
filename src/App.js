import React from 'react'
import { useSelector } from 'react-redux'
import { Route, BrowserRouter, Switch, Router, Link } from 'react-router-dom'
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles'
import history from './history'
import GithubMostPopularList from './containers/GithubMostPopularList/GithubMostPopularList'
import PageHeader from './components_libs/PageHeader'
import globalTheme from './globalTheme'
import NotFound from './containers/NotFound'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    width: '100%',
  },
  header: {
    height: '64px',
  },
  contentContainer: {
    height: 'calc(100% - 64px)',
  },
}))

const App = () => {
  const globalStore = useSelector(state => state.globalStore)
  const classes = useStyles()
  return (
    <BrowserRouter>
      <Router history={history}>
        <MuiThemeProvider theme={globalTheme}>
          <div>
            <div className={classes.container}>
              <PageHeader
                headerText={'Most Popular Github Users in your City'
                }
              />
            </div>
            <div className={classes.contentContainer}>
              <Switch>
                <Route exact path="/" component={GithubMostPopularList} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    </BrowserRouter>
  )
}

export default App
