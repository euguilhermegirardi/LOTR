import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'

import {AppProviders} from '../../context'
import {useAuth} from '../../context/auth-context'

import {Login} from './index-new'

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

test('it should login the user', async () => {
  // arrange
  const handleSubmit = jest.fn()
  render(<Login />, {wrapper: AppProviders})
  const {username, password} = buildLoginForm()
  let spyOnLogin = jest.spyOn(useAuth, 'login');

  // act
  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

  // assert
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit\-btn/i}))

  expect(spyOnLogin).toHaveBeenCalledTimes(1);

  screen.debug()
})
