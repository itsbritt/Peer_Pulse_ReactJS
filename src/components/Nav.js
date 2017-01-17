import React, { Component } from 'react';

import NavLink from './NavLink';

class Nav extends Component {
  render() {
    return (
      <nav className="tabs">
        <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
        <NavLink to="/add">Add a New Topic</NavLink>
      </nav>
    )
  }
}

export default Nav;
