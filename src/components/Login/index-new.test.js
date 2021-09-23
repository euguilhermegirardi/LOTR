import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {AppProviders} from '../../context'
import {Login} from './index-new'

test('username and password is incorrect', async () => {
  // arrange
  render(<Login />, {wrapper: AppProviders})

  // act
  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

  userEvent.type(screen.getByLabelText(/username/i), 'gui')
  userEvent.type(screen.getByLabelText(/password/i), 'dsasdas')
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  screen.debug()
})
