import React from 'react';
import { Component } from 'react';
import { getOneMovie } from '../apiFetch.js'

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      poster_path: '',
      backdrop_path: '',
      release_date: '',
      overview: '',
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: 0,
      tagline: '',
      average_rating: 0
    }
  }
  // componentDidMount() {
  //   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/'+this.state.singleMovie.id)
  //     .then(response => response.json())
  //     .then(data => this.setState({ singleMovie: data.movie}))
  // }

  fetchSingleMovie = () => {
    getOneMovie(this.state.id)
  }

  render() {
    // const background = {
    //   backgroundImage: 'url(' + this.state.singleMovie.backdrop_path + ')'
    // }
    console.log(this.state)
    console.log('id', this.state.id)
    return (
      <div>
        <section className='single-movie'>
        <p className='single-movie-title'>{this.state.title}</p>
        </section>
      </div>
    )
  }


}


export default ShowPage;
