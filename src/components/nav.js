import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Campus<span> - ITLI</span></li>
          </ul>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#section1">About</a></li>
              <li><a href="#section2">Mission</a></li>
              <li><a href="#section3">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
