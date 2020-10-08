import React from 'react'
import { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <article className="display-box">
        <form className="login-form">
          <div className="login-area">
            <label>Name: </label>
            <input
              type='text'
              name='name'
              value={this.state.name}>
            </input>
            <label>Email: </label>
            <input
              type='email'
              name='email'
              value={this.state.email}>
            </input>
            <label>Password: </label>
            <input
              type='password'
              name='password'
              value={this.state.password}>
            </input>
          </div>
        </form>
      </article>
    )
  }
}

export default Login;

// A user’s login session information: {user: {id: 1, name: "Alan", email: "alan@turing.io"}}
