import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav as NavStrap,
  NavItem,
  NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import './../styles/Nav.css';


class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar dark expand="md" className="flex-shrink-0">
        <NavbarBrand tag={Link} to="/" className="d-flex w-50 mr-auto">QzSG</NavbarBrand>

        <NavbarToggler aria-label="Mobile Navbar Toggle" onClick={this.toggle} className={this.state.isOpen ? '' : 'collapsed'}>
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </NavbarToggler>

        <Collapse isOpen={this.state.isOpen} navbar className="w-100">
          <NavStrap className="w-100 justify-content-center" navbar>
            <NavItem>
              <NavLink href="https://github.com/QzSG/" active><FontAwesomeIcon icon={faGithubAlt} size="2x" /></NavLink>
            </NavItem>
          </NavStrap>
          <NavStrap className="ml-auto w-100 justify-content-end" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://blog.qz.sg" active>Blog</NavLink>
            </NavItem>
          </NavStrap>
        </Collapse>
      </Navbar>

    );
  }
}

export default Nav;
