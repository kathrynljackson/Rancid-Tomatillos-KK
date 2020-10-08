import React from 'react';
// import { Component } from 'react';
// //import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
// // import { getMovieData } from './API.js';
// // import API from './API.js';
import MovieData from './MovieData.js';
import Header from './Header.js';
import Login from './Login.js'
//
//

function App() {
  return (
    <div>
      <Login />
      <Header />
      <MovieData />
    </div>
  )
}

export default App;
