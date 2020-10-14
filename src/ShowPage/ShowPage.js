import React from 'react';
import { Component } from 'react';
import { getOneMovie } from '../apiFetch.js'

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Number(this.props.match.params.id),
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

  componentDidMount() {
    getOneMovie(this.state.id)
      .then((data) => this.singleMovieData(data.movie))
      .catch((error) => console.log(error))
  }



  // componentDidMount(id){
  //   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //   console.log('fetchSingleMovie', this.state.id)
  // }

  // updateMovieInfo = (event) => {
  //   this.setState()
  // }


  // fetchSingleMovie = () => {
  //   getOneMovie(this.state.id)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .then(data =>  this.singleMovieData(data.movie))
  //   console.log('fetchSingleMovie', this.state.id)
  // }

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

  render() {
    console.log("HELLO")
    console.log(this.state)
    console.log('render-id', this.state.id)
    let imgUrl = this.state.backdrop_path
    return (
      <div>
        <section className='single-movie-area'
          style = {{ backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
              }}>
          <section className='movie-main-top'>
            <section className='movie-main-top-left'>
              <h2 className='single-movie-title'>{this.state.title}</h2>
              <p className='single-movie-tagline'>{this.state.tagline}</p>
              <p className='single-movie-release-date'><a className='single-movie-info'>Release Date:</a> {this.state.release_date}</p>
              <p className='single-movie-rating'><a className='single-movie-info'>Average Rating:</a> {this.state.average_rating.toFixed(2)}/10</p>
              <p className='single-movie-genre'><a className='single-movie-info'>Genre:</a> {this.state.genres}</p>
              <p className='single-movie-budget'><a className='single-movie-info'>Budget:</a> ${this.state.budget}</p>
              <p className='single-movie-revenue'><a className='single-movie-info'>Revenue:</a> ${this.state.revenue}</p>
              <p className='single-movie-runtime'><a className='single-movie-info'>Runtime:</a> {this.state.runtime} minutes</p>
            </section>
            <section className='movie-main-top-right'>
              <img className='single-movie-poster' src={this.state.poster_path}/>
            </section>
          </section>
          <section className='movie-main-bottom'>
            <p className='movie-main-overview'>{this.state.overview}</p>
          </section>
        </section>
      </div>
    )
  }


}


export default ShowPage;
