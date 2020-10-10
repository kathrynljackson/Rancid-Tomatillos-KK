import React from 'react'
import { Component } from 'react';
import { postData } from './apiFetch.js'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  updateValue = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loginHandler = (event) => {
    event.preventDefault();
    postData(this.state.email, this.state.password)
    .then(response => console.log(response))
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
        </form>
      </article>
    )
  }
}

export default Login;

// A user’s login session information: {user: {id: 1, name: "Alan", email: "alan@turing.io"}}
