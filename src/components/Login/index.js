import React from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import './styles.scss'
import {login} from '../../utils/login'

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.field]: action.value,
      } 
    }
    case 'login': {
      return {
        ...state,
        isLoading: true,
        isError: ''
      } 
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      } 
    }
    case 'error': {
      return {
        ...state,
        isError: 'Incorrect username or password',
        isLoading: false,
        username: '',
        password: '',
      } 
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
      } 
    }
    default:
      break;
  }
  return state
}

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  isError: '',
  isLoggedIn: false,
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Login() {
  const [state, dispatch] = React.useReducer(loginReducer, initialState)
  const {username, password, isLoading, isError, isLoggedIn} = state

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({type: 'login'})
    try {
      await login({username, password})
      dispatch({type: 'success'})
    } catch(error) {
      dispatch({type: 'error'})
    }
  }

  return (
    <div className="login">
      <div className="login__input-container">
        <input 
          className="login__input" 
          type="text" 
          placeholder="username" 
          value={username}
          onChange={e => dispatch({type: 'field', field: 'username', value: e.currentTarget.value})}
        />
        <input 
          className="login__input" 
          type="password" 
          placeholder="password" 
          value={password}
          onChange={e => dispatch({type: 'field', field: 'password', value: e.currentTarget.value})} 
        />
      </div>
      
      {isError ? <span>{isError}</span> : null}
      
      <button className="login__btn" type="submit" disabled={isLoading} onClick={handleSubmit}>
        {isLoading ? <ClipLoader color={'#fff'} loading={isLoading} css={override} size={35} /> : 'Log in'}
      </button>
    </div>
  )
}

export {Login}
