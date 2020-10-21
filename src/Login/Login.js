import React from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom';
import { Component } from 'react';

import { postData } from '../apiFetch.js'
import App from '../App/App.js';

import PropTypes from 'prop-types'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    }
  }

  // clearInputs = () => {
  //   this.setState({email: '', password: ''})
  // }

  updateValue = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loginHandler = (event) => {

    event.preventDefault();
    postData(this.state.email, this.state.password)
    .then(response => {
      return response})

      // .then(data => this.props.setCurrentUser(data.user))
    .then(data => {
      if (data.user) {
        this.setState({loggedIn: true});
        this.props.setUser(data.user)
      } else {
        this.setState({loggedIn: false})
      }
    })
    // .then(data => this.props.setCurrentUser(data.user))
    .catch(error => console.log('Not fetching user data'))
  }




  render() {
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
          <button onClick={this.loginHandler}>Submit</button>
          // {this.state.loggedIn && <Redirect to='/' />}
        </form>
      </article>
    )
  }


  // resetLoggedInState = () => {
  //   this.setState({ loggedIn: true }, function () {
  //     console.log('reset is running 1', this.state.loggedIn);
  //     this.redirect()
  //   });
  //   console.log('reset is running 2', this.state.loggedIn);
  // }

  // redirect = () => {
  //   if (this.state.loggedIn = true) {
  //     return <Redirect to='/movie' />
  //     console.log('REDIRECT IS RUNNING 1', this.state.loggedIn)
  //   }
  //   console.log('REDIRECT IS RUNNING 2', this.state.loggedIn)
  // }

  // loginHandler = (event) => {

  // both = (event) => {
  //   console.log('BOTH IS RUNNING', this.state.loggedIn)
  //   //this.redirect();
  //   this.loginHandler(event);
  //   console.log(this.state.login)
  //
  // }

}

export default Login;

// Login.propTypes = {
//   setCurrentUser: PropTypes.func.isRequired,
// }

// A user’s login session information: {user: {id: 1, name: "Alan", email: "alan@turing.io"}}
