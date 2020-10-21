import React from 'react'
import Header from '../Header/Header.js'
import apiFetch from '../apiFetch.js'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


// describe('Login', () => {

//   it('Works', () => {
//     expect(true).toEqual(true)
//   })


//   it('should render header text', () => {
//     render(<Header />)

//     expect(screen.getByText('Rotten Tomatillos')).toBeInTheDocument()
//   })
// })
