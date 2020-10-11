import React from 'react'
import Login from '../Login/Login.js'
import apiFetch from '../apiFetch.js'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('MovieData', () => {

  it('Works', () => {
    expect(true).toEqual(true)
  })

  it('should render a movie card', () => {

    
  })


});

// it('should have a description', () => {
//   render(<Card
//             id={3}
//             title="Chunky sweaters for chunky pugs"
//             description="You gotta"
//             removeIdea={() => {}}
//           />)
//   expect(screen.getByText('You gotta')).toBeInTheDocument()
// })
