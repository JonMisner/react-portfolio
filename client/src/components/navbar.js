import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md" className="sticky-top">
        <NavbarBrand className="ml-3">JM</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Navigation;