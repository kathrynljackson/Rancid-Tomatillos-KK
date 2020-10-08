import React from 'react'
import { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

//   componentDidMount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }

  componentDidMount() {
    const loginPost = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'greg@turing.io', password: 'abc123' })
    }
    fetch(' https://rancid-tomatillos.herokuapp.com/api/v2/login', loginPost)
      .then(response => response.json())
      .then(response => console.log(response))
      // .then(data => this.setState({ email: data.user.email, password: data.user.password }))
      .catch(error => console.log('Not fetching user data'))
  }

  updateValue(event) {
    this.setState({ [event.target.email]: event.target.value })
  }

  clearInputs() {
    this.setState({email: '', password: ''})
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
              onChange={this.updateValue}
              value={this.state.email}>
            </input>
            <label>Password: </label>
            <input
              type='password'
              name='password'
              onChange={this.updateValue}
              value={this.state.password}>
            </input>
          </div>
          <button onClick={this.componentDidMount}>Submit</button>
        </form>
      </article>
    )
  }
}

export default Login;

// A user’s login session information: {user: {id: 1, name: "Alan", email: "alan@turing.io"}}
