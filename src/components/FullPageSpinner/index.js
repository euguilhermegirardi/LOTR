import React from 'react'
import styled from '@emotion/styled/macro'
import {keyframes} from '@emotion/core'
import {FaSpinner} from 'react-icons/fa'

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
})
Spinner.defaultProps = {
  'aria-label': 'loading',
}

function FullPageSpinner() {
  return (
    <div 
      style={{
        fontSize: '4em',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7FF',
      }}
    >
      <Spinner />
    </div>
  )
}

function SmallSpinner() {
  return (
    <div 
      style={{
        fontSize: '1.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7FF',
      }}
    >
      <Spinner />
    </div>
  )
}

export {FullPageSpinner, SmallSpinner}
