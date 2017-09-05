import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="nav bg-dark">
          <NavLink to="/" className="nav-link">BankShot</NavLink>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/users" className="nav-link">Users</NavLink>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;
