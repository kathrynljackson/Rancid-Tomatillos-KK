import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { createMemoryHistory } from 'history';
let customHistory = createMemoryHistory();



// describe('Card', () => {
//   it('displays correct information in the Card', () => {
//     render(<Card
//               id={1}
//               title="New Idea"
//               description="Something new I thought of"
//               removeIdea={jest.fn()}
//               />);
//     expect(screen.getByText("New Idea")).toBeInTheDocument();
//     expect(screen.getByText("Something new I thought of")).toBeInTheDocument();
//     expect(screen.getByText("Delete")).toBeInTheDocument();
//   });
// });

describe('App', () => {

 it('renders movie cards', () => {

 })

})