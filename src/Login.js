import React from 'react'
import { Redirect } from 'react-router-dom';
import { Component } from 'react';
import { postData } from './apiFetch.js'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    }
  }

  updateValue = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loginHandler = (event) => {
    event.preventDefault();
    postData(this.state.email, this.state.password)
    .then(response => console.log(response))
    .then(this.resetLoggedInState())
    .catch(error => console.log('Not fetching user data'));
    console.log(this.state.loggedIn);
  }

  resetLoggedInState = () => {
    this.setState({ loggedIn: true }, function () {
      console.log(this.state.loggedIn)
    });
    console.log('reset is running', this.state.loggedIn);
  }

  redirect = () => {
    if (this.state.loggedIn === true) {
      return <Redirect to='/movie' />
    }
    console.log(this.state.loggedIn)
    console.log('REDIRECT IS RUNNING')
  }

  both = (event) => {
    console.log('BOTH IS RUNNING')
    this.loginHandler(event);
    this.redirect();
  }


  render() {
    // if (this.state.loggedIn === true) {
    //   return <Redirect to='/movie' />
    // }
    return (
      <article className="display-box">
        <form className="login-form">
          <div className="login-area">
            <label>Email: </label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.updateValue}
            />
            <label>Password: </label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.updateValue}
            />
          </div>
          <button onClick={this.both}>Submit</button>
        </form>
      </article>
    )
  }
}

export default Login;

// A user’s login session information: {user: {id: 1, name: "Alan", email: "alan@turing.io"}}
