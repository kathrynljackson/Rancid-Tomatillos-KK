import React from 'react';
import { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import MovieData from '../MovieData/MovieData.js';
import Login from '../Login/Login.js';
import ShowPage from '../ShowPage/ShowPage.js';
import { getRatings} from '../apiFetch.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


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
    return (
      <main className='App'>
        <Route exact path='/'>
          <Header user={this.state.user} />
          <MovieData user={this.state.user}/>
        </Route>
        <Route exact path='/movies' >
          <Header user={this.state.user} />
          <MovieData user={this.state.user}/>
        </Route>
        <Route exact path='/login'>
          <Header user={this.state.user} />
          <Login setUser={this.setCurrentUser} userId={this.state.user.id} />
        </Route>
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



export default App;
