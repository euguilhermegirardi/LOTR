import React from 'react'

function FullPageErrorFallback({error}) {
  return (
    <div
      role="alert"
      style={{
        color: '#ef5350',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error}</pre>
    </div>
  )
}

export {FullPageErrorFallback}
