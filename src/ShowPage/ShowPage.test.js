import React from 'react';
import ShowPage from '../ShowPage/ShowPage.js';
import { getOneMovie } from '../apiFetch.js';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
jest.mock('../apiFetch.js')

describe('ShowPage', () => {

  it.skip('should show correct movie content', async () => {

    getOneMovie.mockResolvedValue({
      movie: {
        'id': '499932',
        'title': 'The Devil All the Time',
        'poster_path': 'https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg',
        'backdrop_path': 'https://image.tmdb.org/t/p/original//rUeqBuNDR9zN6vZV9kpEFMtQm0E.jpg',
        'release_date': '2020-09-11',
        'overview': 'In Knockemstiff, Ohio and its neighboring backwoods, sinister characters converge around young Arvin Russell as he fights the evil forces that threaten him and his family.',
        'genres': ['Crime', 'Drama', 'Thriller'],
        'budget': 0,
        'revenue': 0,
        'runtime': 138,
        'tagline': '',
        'average_rating': 4.666666666666667,
      }
    })
const person = {
  name: 'blah',
  id: 1,
}

    const thisRender = render (<ShowPage  />)

        expect(getOneMovie).toHaveBeenCalledTimes(1);

        const titleOfMovie = await waitFor(() => screen.getByText('The Devil All the Time'))

        expect(titleOfMovie).toBeInTheDocument();
  })
})
