import React from 'react';
import { Component } from 'react';
import ShowPage from '../ShowPage/ShowPage.js';
import Header from '../Header/Header.js';
import { Link, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { movieDataFetch } from '../apiFetch.js'
import { getRatings } from '../apiFetch.js'

class MovieData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: '',
      allRatings: [],
      userRating: 0,
    };
  }


  async componentDidMount() {
    let data = await movieDataFetch()
    .then(data => this.setState({ movies: data.movies }))
    .catch((error) => console.log(error));
    console.log("DATA", data)
    //console.log("RATING", ratings)
    // .catch(error => console.log('DEATH'))


    if (this.props.user.id > 0) {
      let ratings = await getRatings(this.props.user.id)
      const newMovieMatch = this.state.movies.map(movie => {
        let movieMatch = ratings.ratings.find(info => {
          return info.movie_id == movie.id
        })
        movie.movieRating = movieMatch
        console.log("MOVE", movie)
        return movie
      })
      this.setState({movies: newMovieMatch})
      }
  }

  render() {
    return (
      <main>
      <div className='movie-cards'>
        {this.state.movies.map((movie, index) => {
        const thisID = movie.id;
        let showUserRating;
        if (movie.movieRating) {
          showUserRating = movie.movieRating.rating
        } else {
          showUserRating = 0
        }
        return (
          <section className='movie-card' key={index}>
            <h1 className='movie-title Apps' key={movie.title}>
              {movie.title}
            </h1>
            <p className='movie-date'>
              {movie.release_date.substring(0,4)}
            </p>
            <img className='movie-poster' alt='movie-poster' src={movie.poster_path} />
            <h1 className='movie-rating'>Average Rating: {movie.average_rating.toFixed(1)}/10</h1>
            <h1 className='movie-rating' style={{ display: this.props.user.id > 0 ? 'block' : 'none' }}>My Rating: {showUserRating}</h1>
            <Link to={'/movies/'+thisID} className='movie-link'>Movie Details</Link>
          </section>
        )
      })}
      </div>
      </main>
    )
  }
}

export default MovieData;
