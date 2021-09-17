import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({canReset, error, resetErrorBoundary}) {
  return (
    <div
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '20%', padding: '0.5rem, 1rem'}}
    >
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>Something went wrong while you were fetching the data...</pre>
      {canReset ? (
        <button onClick={resetErrorBoundary}>Try again</button>
      ) : null}
    </div>
  )
}

function ErrorBoundaryComponent(parentProps) {
  const canReset = Boolean(parentProps.onReset || parentProps.resetKeys)
  return (
    <ErrorBoundary 
      fallbackRender={props => <ErrorFallback canReset={canReset} {...props} />}
      {...parentProps}
    />
  )
}

export {ErrorBoundaryComponent}
