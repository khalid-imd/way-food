import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../assets/icon.png";
import "./navbarPartner.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ProfilePartner from "../assets/profilePartner.png";
import usericon from "../assets/usericon.png";
import addproducticon from "../assets/addicon.png";
import logouticon from "../assets/logouticon.png";
import { Link } from "react-router-dom";

const NavigationPartner = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="color">
      <Container>
        <Navbar.Brand href="#home">
          <img src={icon} alt="wayfood" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link></Nav.Link>
            <Nav.Link eventKey={2}>
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <img
                    style={{ width: "30px" }}
                    src={ProfilePartner}
                    alt="profile"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">
                    <Link
                      className="text-decoration-none text-dark"
                      to="/profile-partner"
                    >
                      {" "}
                      <img width={25} src={usericon} alt="" /> Profile Partner
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    <Link
                      to="/add-product"
                      className="text-decoration-none text-dark"
                    >
                      <img width={25} src={addproducticon} alt="" /> Add Product
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="3">
                    <Link to="/" className="text-decoration-none text-dark">
                      <img width={25} src={logouticon} alt="" /> Logout
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationPartner;
