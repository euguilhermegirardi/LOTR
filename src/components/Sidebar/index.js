import React from 'react'

import './styles.scss'
import '../../scss/_global.scss'
import logo from '../../assets/authenticated-app/logo.png'
import logoFooter from '../../assets/authenticated-app/logo-2.png'

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__links">
        <div className="sidebar__logo-content">
          <div className="sidebar__logo-container">
            <img className="sidebar__logo" src={logo} alt="logo-png" />
          </div>
        </div>
        <div className="divider" />
        <div className="sidebar__link-container">
          <span>Books</span>
        </div>
        <div className="divider" />
        <div className="sidebar__link-container">
          <span>Movies</span>
        </div>
        <div className="divider" />
        <div className="sidebar__link-container">
          <span>Characters</span>
        </div>
        <div className="divider" />
        <div className="sidebar__link-container">
          <span>Quotes</span>
        </div>
        <div className="divider" />
      </div>

      <div className="sidebar__footer">
        <div className="sidebar__logo-footer-container">
          <img className="sidebar__logo-footer" src={logoFooter} alt="logo-footer-png" />
        </div>
        <span className="">by Guilherme Girardi</span>
      </div>
    </section>
  )
}

export {Sidebar}
