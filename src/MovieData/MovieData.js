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
      userRating: 0,
    };
  }

  async componentDidMount() {

    let data = await movieDataFetch()
    console.log("DATA", data)

    let rating = await getRatings(this.props.user.id)
    console.log("RATING", rating)

      // })
      // .catch(error => this.setState({ error }))
      this.setState({ movies : data.movies })
  }

  // setUserRating(){
  //   getRatings(userIDFrom another class)
  //   .then(response => {
  //     return response
  //   })
  //   .then(data => {this.setState({ movies : data.movies })
  //   })
  //   .catch(error => this.setState({ error }))
  // }

  render() {
    let myRating = this.state.userRating;

    console.log("AAAAAA", this.state.movies)
    // this.eventHandler()
    return (
      <main>
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
            <h1 className='movie-rating'>Average Rating: {movie.average_rating.toFixed(1)}/10</h1>
            <h1 className='movie-rating' >My Rating: {myRating}</h1>
            <Link to={'/showpage/'+thisID} className='movie-link'>Movie Details</Link>
          </section>
        )
      })}
      </div>
      </main>
    )
  }
}

export default MovieData;
