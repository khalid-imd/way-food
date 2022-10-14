import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/icon.png'
import './navbar.css'
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import basket from '../assets/basketshop.png'
import profile from '../assets/userprofile.png'



const NavigationUser
 = ()=> {
  return (
    <Navbar collapseOnSelect expand="lg" className='color'>
      <Container>
        <Navbar.Brand href="#home"><img src={icon} alt="wayfood" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link>
             <img style={{width:'25px'}} className='mt-2' src={basket} alt="basket" />
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <img style={{width:'30px'}}  src={profile} alt="user" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationUser
;