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
    return (
      <div>
        <section className='single-movie'>
        <p className='test-script'>This is the Single Movie Page</p>
        <p className='single-movie-title'>Title:{this.state.title}</p>
        </section>
      </div>
    )
  }


}


export default ShowPage;
