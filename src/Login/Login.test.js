import React from 'react'
import Login from '../Login/Login.js'
import apiFetch from '../apiFetch.js'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


describe('Login', () => {

  it('Works', () => {
    expect(true).toEqual(true)
  })


  it('should render a input text', () => {
    render(<Login />)

    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('Password:')).toBeInTheDocument()
  })
  //test there is a button with text submit in it

  it('should have a submit button', () => {
    render(<Login />)

    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  it('when submit is clicked loginHandler is called', () => {
    Login.loginHandler = jest.fn();
    render(<Login />)

    userEvent.click(screen.getByText('Submit'))
    expect(Login.loginHandler).toHaveBeenCalledTimes(1)
  })
})

//If you have no arguments in your component how do you test that a function has been called?
//loginHandler is a predefined method on the login class
//How do you mock a method on a react class given that there are no arguments in the component

// it('should invoke removeIdea with the card id when button is clicked', () => {
//   const fakeRemoveIdea = jest.fn();
//   render(<Card
//               id={101}
//               title="Flavor"
//               description="Check if this is soda"
//               removeIdea={fakeRemoveIdea}
//             />)
//   userEvent.click(screen.getByText('Delete'));
//   expect(fakeRemoveIdea).toHaveBeenCalledTimes(1);
//   expect(fakeRemoveIdea).toHaveBeenCalledWith(101)
// })
