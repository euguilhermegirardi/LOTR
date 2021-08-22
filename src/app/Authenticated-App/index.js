import React from 'react'

import './styles.scss'
import {Header} from '../../components/Header'
import {Sidebar} from '../../components/Sidebar'

function AuthenticatedApp() {
  return (
    <section className="dashboard">
      <Sidebar />
      
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header />
        <aside>
          <h2>Content</h2>
        </aside>
      </div>
    </section>
  )
}

export {AuthenticatedApp}
