import React from 'react'
import Login from '../Login/Login.js'
import apiFetch from '../apiFetch.js'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { postData } from '../apiFetch.js'



describe('Login', () => {

  it('Works', () => {
    expect(true).toEqual(true)
  })

  it('should have two input fields', () => {
    render(<Login />)

    const emailInput = screen.getByText('Email:')
    const passwordInput = screen.getByText('Password:')

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  })

  it('should have a submit button', () => {
    render(<Login />)

    const submitButton = screen.getByRole('button', {name: 'Submit'})

    expect(submitButton).toBeInTheDocument();
  })

  it('when submit is clicked loginHandler is called', () => {
    const mockSet = jest.fn();
    const aUser = {}
    Login.loginHandler = jest.fn();
    render(

        <Login
      setUser={mockSet}
      userId={aUser}/>

  )
    userEvent.click(screen.getByText('Submit'))
    expect(Login.loginHandler).toHaveBeenCalledTimes(1)
  })


  it('should check that input is cleared on submit', async() => {
    const setUser = jest.fn()
    render(<Login setUser={setUser}
      />)
    postData.mockResolvedValue({"email": "greg@turing.io", "id": 72, "name": 'Greg'})
    const emailInput = await waitFor(() => screen.getByText('Email:'))
    const passwordInput = screen.getByText('Password:')
    const submitButton = screen.getByRole('button', {name: 'Submit'})

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(emailInput, {target: {name: 'email', value: 'something'}})
    expect(emailInput.value).toEqual('something')
    fireEvent.change(passwordInput, {target: {name: 'password', value: 'badpassword'}})
    expect(passwordInput.value).toEqual('badpassword')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(emailInput.value).toHaveLength(0)
      expect(passwordInput.value).toHaveLength(0)
    })
  })
})
