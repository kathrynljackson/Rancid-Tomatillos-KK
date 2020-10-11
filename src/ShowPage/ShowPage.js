import React from 'react';
import { Component } from 'react';

class ShowPage extends Component {
  constructor() {
    this.state = {
      singleMovie: [],
    }
  }
  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/'+this.state.singleMovie.id)
      .then(response => response.json())
      .then(data => this.setState({ singleMovie: data.movie}))
  }

  render() {
    const background = {
      backgroundImage: 'url(' + this.state.singleMovie.backdropPath + ')'
    }
    return (
      <div>
        <section className='single-movie' style= { background }>
        <p className='single-movie-title'>{this.state.singleMovie.title}</p>
        </section>
      </div>
    )
  }


}


export default ShowPage;
