import React from 'react';

class MovieData extends React.Component{
  constructor(props){
    super();
    let movie = props.movie;
    this.state = {
      title: movie['title'],
      releaseDate: movie['release_date'],
      poster: movie['poster_path'],
      averageRating: movie['average_rating']
    };
  }

  render(){
    return (
      <p>{this.state.title}</p>
    )
  }

}

export default MovieData;
