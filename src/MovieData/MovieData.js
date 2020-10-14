import React from 'react';
import { Component } from 'react';
import ShowPage from '../ShowPage/ShowPage.js';
import { Link, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { movieDataFetch } from '../apiFetch.js'

class MovieData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: '',
      history: [],
    };
  }

  componentDidMount() {
    console.log('here2')
    movieDataFetch()
      .then(response => {
        console.log('here4', response)
        return response
      })
      .then(data => {
        console.log('here5', data)
        this.setState({ movies : data.movies })
      })
      .catch(error => this.setState({ error }))
  }

  moreAbout(path) {
    this.props.history.push(path);
    console.log('moreAbout ACTIVATED');
  }

  render() {
    console.log('here')

    // this.eventHandler()
    return (
      <div className='movie-cards'>
        {this.state.movies.map((movie, index) => {
        const thisID = movie.id;
        return (
          <section className='movie-card' key={index}>
            <h1 className='movie-title Apps' key={movie.title}>
              {movie.title}
            </h1>
            <p className='movie-date'>
              {movie.release_date.substring(0,4)}
            </p>
            <img className='movie-poster' alt='movie-poster' src={movie.poster_path} />
            <h1 className='movie-rating'>{movie.average_rating.toFixed(1)}/10</h1>
            <Link to={'/showpage/'+thisID} className='movie-link'>Movie Details</Link>
          </section>
        )
      })}
      </div>
    )
  }
}



export default MovieData;
