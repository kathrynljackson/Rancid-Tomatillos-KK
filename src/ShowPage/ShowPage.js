import React from 'react';
import { Component } from 'react';
import { getOneMovie, postRatings, getRatings } from '../apiFetch.js'
import { NavLink } from 'react-router-dom'


class ShowPage extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props)
    this.state = {
      id: this.props.movieID,
      title: '',
      poster_path: '',
      backdrop_path: '',
      release_date: '',
      overview: '',
      average_rating: 0,
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: 0,
      tagline: '',
      allRatings: [],
      user_rating: 'x',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(userId, movieId, ratings) {
    getOneMovie(this.state.id)
      .then((data) => this.singleMovieData(data.movie))
      // .then(this.movieRatingsData(userId, movieId, ratings))
      .catch((error) => console.log(error));
    getRatings(this.props.user.id)
    // .then(response => console.log(response))
    .then((data) => this.singleMovieRating(data))
  }

  postNewRating = (event) =>  {
    event.preventDefault();
    console.log('postNewRating IS RUNNING')
    postRatings(this.props.user.id, parseInt(this.props.movieID), this.state.user_rating)
      .then(() => getRatings(this.props.user.id))
      .then(response => console.log(response))
      .catch((error => console.log(error)))
  }
  //THIS IS WORKING ^^^^

  singleMovieRating = (data) => {
    this.setState({ allRatings: data })
    console.log('SINGLEMOVIERATING RUNNING', this.state.allRatings.ratings);
    this.displaySingleMovieRating(this.state.allRatings.ratings);
  }

  displaySingleMovieRating = (array) => {
    if (this.props.user.id > 0) {
      let ratingToDisplay = array.find(rating => {
        return rating.movie_id == this.state.id;
      })
      console.log("This movie's rating is: ", ratingToDisplay)
      console.log("This movie's ACTUAL rating is: ", ratingToDisplay.rating)
      this.setState({ user_rating: ratingToDisplay.rating})
    }
  }


  singleMovieData = (data) => {
    this.setState({
      title: data.title,
      poster_path: data.poster_path,
      backdrop_path: data.backdrop_path,
      release_date: data.release_date,
      overview: data.overview,
      average_rating: data.average_rating,
      genres: data.genres,
      budget: data.budget,
      revenue: data.revenue,
      runtime: data.runtime,
      tagline: data.tagline,
    })
  }



    handleChange = (event) => {
      this.setState({user_rating: parseInt(event.target.value)});
      console.log('RESETTING USER RATING')
    }




  render() {
    console.log('current movie: ', this.state)
    let imgUrl = this.state.backdrop_path;
    let movieGenres = this.state.genres.map(genre => {
      return <li key={genre}>{genre}</li>;
    })
    return (
      <div>
        <section className='single-movie-area'
          style = {{ backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
              }}>
          <section className='movie-main-top'>
            <section className='movie-main-top-left'>
              <h2 className='single-movie-title'>{this.state.title}</h2>
              <p className='single-movie-tagline'>{this.state.tagline}</p>
              <p className='single-movie-release-date'><a className='single-movie-info'>Release Date:</a> {this.state.release_date}</p>
              <p className='single-movie-rating'><a className='single-movie-info'>Average Rating:</a> {this.state.average_rating.toFixed(1)}/10</p>
              <p className='user-movie-rating' style={{ display: this.props.user.id > 0 ? 'block' : 'none' }}><a className='single-movie-info'>My Rating:</a> {this.state.user_rating}/10</p>
              <p className='single-movie-genre'><a className='single-movie-info'>Genre(s):</a> {movieGenres}</p>
              <p className='single-movie-budget'><a className='single-movie-info'>Budget:</a> ${this.state.budget.toLocaleString()}</p>
              <p className='single-movie-revenue'><a className='single-movie-info'>Revenue:</a> ${this.state.revenue.toLocaleString()}</p>
              <p className='single-movie-runtime'><a className='single-movie-info'>Runtime:</a> {this.state.runtime} minutes</p>
            </section>
            <section className='movie-main-top-right'>
              <img className='single-movie-poster' src={this.state.poster_path}/>
            </section>
          </section>
          <section className='movie-main-bottom'>
            <p className='movie-main-overview'>{this.state.overview}</p>

          </section>

          <form style={{ display: this.props.user.id > 0 ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
            <label>
              Rate this Movie:
              <select value = {this.state.user_rating} onChange={this.handleChange}>
                <option value="0">Rate this movie!</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>
            <button type="submit" onClick={this.postNewRating}>Sumbit My Rating</button>
            <NavLink to='/movie'>BACK</NavLink>
          </form>

        </section>
      </div>
    )
  }


}


export default ShowPage;
