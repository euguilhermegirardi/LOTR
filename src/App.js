import * as React from 'react'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import {useAuth} from './context/auth-context'
import {FullPageSpinner} from './components/FullPageSpinner'

const AuthenticatedApp = React.lazy(() => import('./app/Authenticated-App'))
const UnauthenticatedApp = React.lazy(() => import('./app/Unauthenticated-App'))

function App() {
  const {user} = useAuth()

  return (
    <>
      <React.Suspense fallback={<FullPageSpinner />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
      
      <ToastContainer />
    </>
  )
}

export default App
