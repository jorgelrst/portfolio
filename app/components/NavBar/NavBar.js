import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import logo from 'images/logos/logo-white.png';

import {
  Navbar, Nav, NavDropdown
} from 'react-bootstrap';

import './style.scss';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navEnum: {
        'HOME': 0,
        'BLOG': 1,
      }
    };
  }

  render() {
    const { navEnum } = this.state;
    const activePathname = window.location.pathname.substr(1).toUpperCase() || 'HOME';

    return (
      <Navbar className="nav-bar" collapseOnSelect fixed="top" expand="md" bg="dark">
        <Navbar.Brand className="nav-brand"><Link to="/"><img className="nav-logo" src={logo} alt="logo" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className={`link-inner ${(navEnum[activePathname] === navEnum.HOME) ? 'active' : ''}`} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={`link-inner ${(navEnum[activePathname] === navEnum.BLOG) ? 'active' : ''}`} to="/blog">
                Blog
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {

};

NavBar.propTypes = {

};

export default NavBar;