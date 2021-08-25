import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './styles.scss'
import {Header} from '../../components/Header'
import {Home} from '../../views/Home'
import {Books} from '../../views/Books'
import {Movies} from '../../views/Movies'
import {Characters} from '../../views/Characters'
import {Quotes} from '../../views/Quotes'
import {Sidebar} from '../../components/Sidebar'

function AuthenticatedApp() {
  return (
    <section className="dashboard">
      <Sidebar />
      <div className="dashboard__header-container">
        <Header />
        <AppRoutes />
      </div>
    </section>
  )
}

function AppRoutes() {
  return (
    <Router>  
      <Switch>
        <Route exact path='/dashboard' component={Home} />
        <Route exact path='/books' component={Books} />
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/quotes' component={Quotes} />
      </Switch>
    </Router>
  )
}

export {AuthenticatedApp}
