import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { UnauthenticatedApp } from './app/Unauthenticated-App'
import { AuthenticatedApp } from './app/Authenticated-App'

function App() {
  return (
    <Router>  
      <Switch>
        <Route exact path='/' component={UnauthenticatedApp}/>
        <Route exact path='/dashboard' component={AuthenticatedApp}/>
      </Switch>
    </Router>
  )
}

export default App
