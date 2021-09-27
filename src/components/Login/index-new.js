import React from 'react'
import {css} from "@emotion/react"
import ClipLoader from "react-spinners/ClipLoader"

import './styles.scss'
import {useAuth} from '../../context/auth-context'
import {useAsync} from '../../hooks/useAsync'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Login() {
  const {run, isLoading, isError, error} = useAsync()
  const {login} = useAuth()

  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = event.target.elements
    run(
      login({
        username: username.value,
        password: password.value,
      }),
    )
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__input-container">
        <input aria-label="username" className="login__input" id="username" type="text" />
        <input aria-label="password" className="login__input" id="password" type="password" />
      </div>

      {isError ? <span>{error}</span> : null}

      <button aria-label="submit-btn" type="submit" className="login__btn" disabled={isLoading}>
        {isLoading ? <ClipLoader aria-label="loading" color={'#fff'} loading={isLoading} size={35} /> : 'Login'}
      </button>
    </form>
  )
}

export {Login}
