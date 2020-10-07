import React from 'react';
import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
// import { getMovieData } from './API.js';
import API from './API.js';
import MovieData from './Movie.js';


function App(props) {
  return (
    <section>
    <h1 className='Apps'>
      {props.movies.map(movie =>
        <MovieData key={movie.title} movie={movie}/>
      )}
    </h1>
    </section>
  )
}


export default App;
