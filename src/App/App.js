import React from 'react';
import { Component } from 'react';
// //import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
// // import { getMovieData } from './API.js';
// // import API from './API.js';
import MovieData from '../MovieData/MovieData.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js'
import ShowPage from '../ShowPage/ShowPage.js'

// import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

//
//

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      userId: 0,
      isLoggedIn: false
    }
  }

  // setCurrentUser = (data) => {
  //   this.setState({ currentUser: data.user.name, userID: data.user.id, isLoggedIn: true})
  // }

  render = () => {
    return (
      <main className='App'>
        <Route path='/login' >
          <Login setCurrentUser={this.setCurrentUser} />
        </Route>
        <Route path='/movie' >
          <MovieData />
        </Route>
        <Route path='/showpage/:id'
        render={(props) =>
          <ShowPage {...props} />}
          />

      </main>
    )
  }
}

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/movie" component={MovieData} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }


// function App() {
//   return (
//     <main>
//         <Switch>
//             <Route exact path="/" render= {() => { 
//               return <Login />;}
//             }
//               exact />
//             <Route path="/movie" render= {() => { 
//               return <MovieData />;}
//             }
//             exact />
//             // <Route component={Error} />
//         </Switch>
//     </main>
//   )
// }



export default App;
