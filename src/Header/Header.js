import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <header>
        <section className="login-message">{this.props.userMessage}</section>
        <p className="header-text">Rotten Tomatillos</p>
        <Link to={'/login'} className='header-link'>LOGIN</Link>
      </header>
    )
  }
}



export default Header;
