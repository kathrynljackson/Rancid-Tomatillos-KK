import React from 'react';
import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
// import { getMovieData } from './API.js';
// import API from './API.js';
import MovieData from './MovieData.js';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      // .then(response => this.setState({ movies }))
      .then(data => this.setState({ movies : data.movies }))
      // .then(data => movies = data.movies)
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <section>
      <h1 className='Apps'>
        {this.state.movies.map((movie, index) =>
          <MovieData key={index} movie={this.movie}/>
      )}
      </h1>
      </section>
    )
  }
}


export default App;
