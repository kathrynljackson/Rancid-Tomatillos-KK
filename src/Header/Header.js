import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  logout = (event) => {
   localStorage.clear();
 
  }

  render() {
    return (
      <header className='header'>
        <a className="header-text header-link" href='/login'>Login</a>
        <a className="header-text header-link" href='https://github.com/kathrynljackson/Rancid-Tomatillos-KK'>About</a>
        <a className="header-text header-link" href='/' onClick={this.logout()} style={{ visibility: this.props.user.id > 0 ? 'visible' : 'hidden' }}>Logout</a>
        <a className="header-text rotten-tomatillos">Rotten Tomatillos</a>
      </header>
    )
  }
}



export default Header;
