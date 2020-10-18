import React from 'react'
import Header from '../ShowPage/ShowPage.js'
import apiFetch from '../apiFetch.js'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


describe('ShowPage', () => {

  it('Works', () => {
    expect(true).toEqual(true)
  })


  it('should render movie info', () => {
    render(<ShowPage
      />)

    expect(screen.getByText('Rotten Tomatillos')).toBeInTheDocument()
  })
})

// render(<Card
//           id={26}
//           title="Get coffee!"
//           description="You MUST"
//           removeIdea={() => {}}
//         />)
