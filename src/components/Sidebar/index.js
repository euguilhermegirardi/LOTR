import React from 'react'
import {NavLink as RouterLink} from 'react-router-dom'
import {useMatch} from '@reach/router'

import './styles.scss'
import '../../scss/_global.scss'
import logo from '../../assets/authenticated-app/logo.png'
import logoFooter from '../../assets/authenticated-app/logo-2.png'

function Sidebar() {
  return (
    <section className="sidebar">
      <Nav />

      <div className="sidebar__footer">
        <div className="sidebar__logo-footer-container">
          <img className="sidebar__logo-footer" src={logoFooter} alt="logo-footer-png" />
        </div>
        <span className="">by Guilherme Girardi</span>
      </div>
    </section>
  )
}

function Nav() {
  return (
    <div className="sidebar__links">
      <div className="sidebar__logo-content">
          <div className="sidebar__logo-container">
            <RouterLink 
              to="/dashboard"
            >
              <img className="sidebar__logo" src={logo} alt="logo-png" />
            </RouterLink>
          </div>
      </div>
      
      <div className="divider" />

      <RouterLink 
        to="/books" 
        className="sidebar__link-container" 
        activeClassName="active-link"
      >
        <span>Books</span>
      </RouterLink>
      <div className="divider" />
      <RouterLink 
        to="/movies" 
        className="sidebar__link-container" 
        activeClassName="active-link"
      >
        <span>Movies</span>
      </RouterLink>
      <div className="divider" />
      <RouterLink 
        to="/characters" 
        className="sidebar__link-container"
        activeClassName="active-link"
      >
        <span>Characters</span>
      </RouterLink>
      <div className="divider" />
      <RouterLink 
        to="/quotes" 
        className="sidebar__link-container"
        activeClassName="active-link"
      >
        <span>Quotes</span>
      </RouterLink>
      <div className="divider" />
    </div>
  )
}

export {Sidebar}
