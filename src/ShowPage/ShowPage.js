import React from 'react';
import { Component } from 'react';
import { getOneMovie, postRatings, getRatings } from '../apiFetch.js'

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
    }
    console.log('props', props)
  }

  componentDidMount(userId, movieId, ratings) {
    getOneMovie(this.state.id)
      .then((data) => this.singleMovieData(data.movie))
      .then(this.movieRatingsData(userId, movieId, ratings))
      .catch((error) => console.log(error))
  }

  movieRatingsData(userId, movieId, ratings) {
    postRatings(userId, movieId, ratings)
    .then(getRatings(userId))
    .catch((error => console.log(error)))
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
              <p className='user-movie-rating'><a className='single-movie-info'>My Rating:</a> {this.state.user_rating}/10</p>
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

          <form onSubmit={this.handleSubmit}>
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
            <input type="submit" value="Submit" />
          </form>

        </section>
      </div>
    )
  }


}


export default ShowPage;
