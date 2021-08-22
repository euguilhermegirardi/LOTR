import React from 'react'
import './styles.scss'

function Login() {
  return (
    <div className="login">
      <div className="login__input-container">
        <input className="login__input" type="text" placeholder="username" />
        <input className="login__input" type="password" placeholder="password" />
      </div>
      <button className="login__btn">Login</button>
    </div>
  )
}

export {Login}
