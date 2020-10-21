import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerMessage: 'Welcome!'
    }
  }


  setHeaderMessage() {
    console.log("SET HEADER MESSAGE IS RUNNING");
    if (this.props.user.name) {
      console.log('USER PROP', this.props.user)
    this.setState({ headerMessage: `Welcome, ${this.props.user.name}!`})
    }
  }

  logout = (event) => {
   localStorage.clear();
 
  }

  render() {
    return (
      <div>
      
      <header className='header'>
        <a className="header-text header-link" href='https://github.com/kathrynljackson/Rancid-Tomatillos-KK'>About</a>
        <a className="header-text header-link" href='/login'>Login</a>
        <a className="header-text header-link" href='/' onClick={this.logout()}>Logout</a>
        <a className="header-text rotten-tomatillos">Rotten Tomatillos</a>
      </header>
      <section className="header-text login-message">{this.state.headerMessage}</section>
      </div>
    )
  }
}



export default Header;
