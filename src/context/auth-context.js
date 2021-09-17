import * as React from 'react'
import {toast} from 'react-toastify'

import * as auth from '../provider/auth-provider'
import {client} from '../utils/api-client'
import {useAsync} from '../hooks/useAsync'
import {FullPageSpinner} from '../components/FullPageSpinner'
import {FullPageErrorFallback} from '../components/FullPageErrorFallback'

function bootstrapAppData() {
  const token = auth.getToken()
  return new Promise(function(resolve, reject) {
    let user = null
    if(token) {
      user = token
    }
    resolve(user)
  })
}

const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

function AuthProvider(props) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync()

  React.useEffect(() => {
    const appDataPromise = bootstrapAppData()
    run(appDataPromise)
  }, [run]) 

  const login = React.useCallback(
    form => auth.login(form).then(user => {
      toast.success('Successfully logged in!')
      setData(user)
    }),
    [setData],
  )

  const logout = React.useCallback(() => {
    toast.error('Logged out!')
    auth.logout()
    setData(null)
  }, [setData])

  const value = React.useMemo(
    () => ({user, login, logout}),
    [login, logout, user],
  )

  if (isLoading || isIdle) {
    return <FullPageSpinner />
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />
  }

  throw new Error(`Unhandled status: ${status}`)
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

function useClient() {
  const {user} = useAuth()
  const token = user?.token
  return React.useCallback(
    (endpoint, config) => client(endpoint, {...config, token}),
    [token],
  )
}

export {AuthProvider, useAuth, useClient}
