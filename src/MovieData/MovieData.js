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

  // async componentDidMount() {
  //   let data = await movieDataFetch()
  //   let ratings = await getRatings(this.props.user.id)
  //   console.log("DATA", data)
  //   console.log("RATING", ratings)
  //   if (this.props.user.id > 0) {
  //     return  movieMatch = ratings.find(rating => {
  //       return movie.id === rating.movie_id
  //     })
  //   })
  // }

  async componentDidMount() {
    let data = await movieDataFetch()
    let ratings = await getRatings(this.props.user.id)
    .catch((error) => console.log(error));
    console.log("DATA", data)
    console.log("RATING", ratings)
    // .catch(error => console.log('DEATH'))


    if (this.props.user.id > 0) {
      const newMovieMatch = data.movies.map(movie => {
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

  //   aysnc componentDidMount() {
  //   await movieDataFetch()
  //   .then((data) => this.setState({ movies : data.movies })
  //   .then(() => await getRatings(this.props.user.id))
  //
  // }









      // .catch(error => this.setState({ error }))


      //if movie has not been rated the default should be zero
      //combine the two arrays together and set the state based on the two arrays






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
    // let myRating = this.state.userRating;


    console.log("AAAAAA", this.state.movies)
    // console.log("1", this.state.movies.movieRating)
    // console.log("S", this.state.movies[0].movieRating)

    // console.log("LOG", this.state.movies.movieRating.rating)
    // let specificRating = this.state.movies ? this.state.movies.movieRating.rating : 0
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
            <h1 className='movie-rating' >My Rating: {}</h1>
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
