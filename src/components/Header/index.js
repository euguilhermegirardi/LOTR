import React from 'react'

import './styles.scss'
import CustomizedSwitches from '../../components/Switch'

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__info">
          <span className="header__user">Good morning, Guilherme!</span>
          <button className="header__btn-logout">Logout</button>
        </div>
        <div className="header__theme">
          <span className="header__switch-txt">Switch theme</span>
          <CustomizedSwitches />
        </div>
      </header>
      <div className="divider" />
    </>
  )
}

export {Header}
