import React from 'react'

import './styles.scss'
import {Header} from '../../components/Header'
import {Home} from '../../views/Home'
import {Books} from '../../views/Books'
import {Movies} from '../../views/Movies'
import {Characters} from '../../views/Characters'
import {Quotes} from '../../views/Quotes'
import {Sidebar} from '../../components/Sidebar'

function AuthenticatedApp() {
  return (
    <section className="dashboard">
      <Sidebar />
      
      <div className="dashboard__header-container">
        <Header />
        <Movies />
      </div>
    </section>
  )
}

export {AuthenticatedApp}
