import React from 'react';
import { Component } from 'react';


class MovieData extends React.Component {
  constructor(props) {
    console.log(props)
    super();
    let movies = props.movies;
    this.state = {
      title: movies['title'],
      releaseDate: movies['release_date'],
      poster: movies['poster_path'],
      averageRating: movies['average_rating']
    };
  }

  render(){
    return (
      <p>{this.state.title}</p>
    )
  }

}

export default MovieData;
