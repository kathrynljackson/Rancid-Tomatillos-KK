import React from 'react'
import { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <header>
        <section>{this.props.loginMessage}</section>
        <p className="header-text">Your Account</p>
      </header>
    )
  }
}

export default Header;
