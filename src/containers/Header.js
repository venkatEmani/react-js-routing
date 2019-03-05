import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <ul className="Header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/properties">Properties</NavLink></li>
      </ul >
    );
    
  }
}
 