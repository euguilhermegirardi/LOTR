import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './styles.scss'
import {Header} from '../../components/Header'
import {Home} from '../../views/Home'
import {Books} from '../../views/Books'
import {Sidebar} from '../../components/Sidebar'

function AuthenticatedApp() {
  return (
    <Router>  
      <section className="dashboard">
        <Sidebar />
          
        <div className="dashboard__header-container">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/books' component={Books} />
        </Switch>
        </div>
      </section>
    </Router>
  )
}

export default AuthenticatedApp
