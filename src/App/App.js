import React from 'react';
import { Component } from 'react';
// //import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
// // import { getMovieData } from './API.js';
// // import API from './API.js';
import Header from '../Header/Header.js';
import MovieData from '../MovieData/MovieData.js';
import Login from '../Login/Login.js'
import ShowPage from '../ShowPage/ShowPage.js'
import { getRatings} from '../apiFetch.js'

// import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

//
//

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      loginStatus: false,
      myRatings: [],
    }
  }


  setCurrentUser = (newUser) => {
    console.log('helllllllooooooooooooo')
    this.setState({ user: newUser})
    this.fetchUserRatings(this.state.user.id)

  }

  userMessage = () => {
    if (this.state.loginStatus === true) {
      return <h2>BLAH</h2>
    } else {

      return <h2>Welcome, {this.state.currentUser}!</h2>
      console.log('MESSAGE', this.state.currentUser)


    }
  }

  loginView = () => {
    if (!this.state.user.name) {
      this.setState({loginStatus: true})
    }
  }

  getUserRatings = (id) => {
    console.log('getUserRatings IS RUNNING')
    getRatings(id)
    .then(data => this.setState({ myRatings: data.ratings }))
    .catch(error => this.setState({ error }))
  }

  render = () => {
    let welcomeMessage = this.userMessage()
    return (
      <main className='App'>
        <Route exact path='/'>
          <Header />
          <MovieData user={this.state.user}/>
        </Route>
        <Route exact path='/login' >
          <h1>HELLO</h1>
        </Route>
        <Route exact path='/movies' >
          <Header />
          <MovieData user={this.state.user}/>
        </Route>
        <Route exact path='/login' render={ () => <Login setUser={this.setCurrentUser} /> }
        />

        <Route exact path='/movies/:movie_id'
        render={({ match }) => {
          const { movie_id } = match.params;
          return <ShowPage movieID={movie_id} movieRatings={this.state.myRatings} user={this.state.user} getUserRatings={this.getUserRatings} />
        }}
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
