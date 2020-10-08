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
      <form>
        <label>NAME</label>
        <input
          type='text'
          name='name'
          value={this.state.name}>
        </input>
        <label>EMAIL</label>
        <input
          type='email'
          name='email'
          value={this.state.email}>
        </input>
        <label>PASSWORD</label>
        <input
          type='password'
          name='password'
          value={this.state.password}>
        </input>
      </form>
    )
  }
}

export default Login;

// A user’s login session information: {user: {id: 1, name: "Alan", email: "alan@turing.io"}}
