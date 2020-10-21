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


  // componentDidMount(){
  //   console.log('CURRENT USER!', this.state.currentUser1)
   
  //     this.setHeaderMessage();
  // }

  setHeaderMessage() {
    console.log("SET HEADER MESSAGE IS RUNNING");
    if (this.props.user.name) {
      console.log('USER PROP', this.props.user)
    this.setState({ headerMessage: `Welcome, ${this.props.user.name}!`})
    }
  }

  render() {
    return (
      <header>
        <section className="login-message">{this.state.headerMessage}</section>
        <p className="header-text">Rotten Tomatillos</p>
        <Link to={'/login'} className='header-link'>LOGIN</Link>
      </header>
    )
  }
}



export default Header;
