import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import {UnauthenticatedApp} from './app/Unauthenticated-App'
import {AuthenticatedApp} from './app/Authenticated-App'

function App() {
  return (
    <AuthenticatedApp />
  )
}

export default App
