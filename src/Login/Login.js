import PropTypes from 'prop-types';
import React from 'react'
import { Redirect } from 'react-router-dom';
import { Component } from 'react';
import { postData } from '../apiFetch.js'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    }
  }

  clearInputs = () => {
    this.setState({email: '', password: ''})
  }

  updateValue = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loginHandler = (event) => {
    event.preventDefault();
    postData(this.state.email, this.state.password)
    .then(response => {
      return response})
    .then(data => {
      if (data.user) {
        this.setState({loggedIn: true});
        this.props.setUser(data.user)
      } else {
        this.setState({loggedIn: false})
      }
    })
    .then(() => this.clearInputs())
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

}

export default Login;

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
}
