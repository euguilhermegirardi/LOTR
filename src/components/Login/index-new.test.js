import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// import {renderHook, act} from '@testing-library/react-hooks'
// import {build, fake} from '@jackfranklin/test-data-bot'

import {AppProviders} from '../../context'
import {Login} from './index-new'

// import {useAuth} from '../../context/auth-context'
// import * as auth from '../../provider/auth-provider'

test('it should login the user', async () => {
  // arrange
  render(<Login />, {wrapper: AppProviders})

  // act
  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

  userEvent.type(screen.getByLabelText(/username/i), 'gui')
  userEvent.type(screen.getByLabelText(/password/i), 'xxx')
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  screen.debug()
})
