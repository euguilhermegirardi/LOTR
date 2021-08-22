import React from 'react'

import CustomizedSwitches from '../../components/Switch'

function Header() {
  return (
    <header>
      <div>
        <span>Good morning, Guilherme!</span>
        <button>Logout</button>
      </div>
      <div>
        <CustomizedSwitches />
      </div>
    </header>
  )
}

export {Header}
