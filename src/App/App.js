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
// import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
                <Route path="/" component={Login} exact />
                <Route path="/movie" component={MovieData} />
                // <Route component={Error} />
            </Switch>
        </main>
    )
}



export default App;
