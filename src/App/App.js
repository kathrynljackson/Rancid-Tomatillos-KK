import React from 'react';
// import { Component } from 'react';
// //import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
// // import { getMovieData } from './API.js';
// // import API from './API.js';
import MovieData from '../MovieData/MovieData.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js'

// import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
//
//

// function App() {
//   return (
//     <div>
//       <switch>
//       <Login />
//       </switch>
//       <Header />
//       <MovieData />
//     </div>
//   )
// }

function App() {
  return (
    <main>
        <Switch>
            <Route path="/" render= {() => { 
              return <Login />;}
            }
              exact />
            <Route path="/movie" render= {() => { 
              return <MovieData />;}
            }
            exact />
            // <Route component={Error} />
        </Switch>
    </main>
  )
}



export default withRouter(App);
