import React from 'react';
import { Component } from 'react';


class MovieData extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies : data.movies }))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <div>
        {this.state.movies.map((movie, index) => {
        return (
          <section>
          <h1 className='Apps' key={index}>
            {movie.title}
          </h1>
          </section>
        )
      })}
      </div>
    )
  }
}



export default MovieData;
