import React from 'react';
import { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import MovieData from '../MovieData/MovieData.js';
import Login from '../Login/Login.js'
import ShowPage from '../ShowPage/ShowPage.js'
import { getRatings} from '../apiFetch.js'
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      myRatings: [],
    }
  }

  setCurrentUser = (newUser) => {
    this.setState({ user: newUser})
    this.fetchUserRatings(this.state.user.id)
  }

  getUserRatings = (id) => {
    getRatings(id)
    .then(data => this.setState({ myRatings: data.ratings }))
    .catch(error => this.setState({ error }))
  }

  render = () => {
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

export default App;
