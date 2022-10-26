import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import icon from "../images/navbar/icon.png";
import ProfilePartner from "../images/navbar/profilePartner.png";
import usericon from "../images/navbar/usericon.png";
import addproducticon from "../images/navbar/addicon.png";
import logouticon from "../images/navbar/logouticon.png";
import basket from "../images/navbar/basketshop.png";
import profile from "../images/navbar/userprofile.png";

const Navigation = () => {
  const [showlogin, setShowlogin] = useState(false);
  const [showregister, setShowregister] = useState(false);
  const handleCloseLogin = () => setShowlogin(false);
  const handleCloseRegister = () => setShowregister(false);
  const handleShowlogin = () => setShowlogin(true);
  const handleShowregister = () => setShowregister(true);
  const [isPartner, setIsLoginPartner] = useState(false);
  const [isUser, setIsLoginUser] = useState(false);

  const [form, setForm] = useState({
    email: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (form.email === "partner@mail.com") {
      return setIsLoginPartner(!isPartner);
    } else if (form.email === "user@mail.com") {
      return setIsLoginUser(!isUser);
    } else {
      alert(
        `masukan partner@mail.com untuk masuk sebagai Partner, dan user@mail.com untuk masuk sebagai User`
      );
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="color">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">
            <img src={icon} alt="wayfood" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {isPartner ? (
              <Navbar expand="lg" className="color">
                <Container>
                  <Navbar id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                      <Nav.Link></Nav.Link>
                      <Nav.Link eventKey={2}>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="transparent"
                            id="dropdown-basic"
                          >
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
                                <img width={25} src={usericon} alt="" /> Profile
                                Partner
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="1">
                              <Link
                                to="/add-product"
                                className="text-decoration-none text-dark"
                              >
                                <img width={25} src={addproducticon} alt="" />{" "}
                                Add Product
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item
                              eventKey="3"
                              onClick={() => {
                                setIsLoginPartner(false);
                              }}
                            >
                              <Link
                                to="/"
                                className="text-decoration-none text-dark"
                              >
                                <img width={25} src={logouticon} alt="" />{" "}
                                Logout
                              </Link>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Nav.Link>
                    </Nav>
                  </Navbar>
                </Container>
              </Navbar>
            ) : isUser ? (
              <Navbar collapseOnSelect expand="lg" className="color">
                <Container>
                  <Navbar>
                    <Nav className="me-auto"></Nav>
                    <Nav>
                      <Nav.Link>
                        <Link to="/cart">
                          <img
                            style={{ width: "25px" }}
                            className="mt-2"
                            src={basket}
                            alt="basket"
                          />{" "}
                          <Badge
                            className="rounded-circle"
                            bg="danger"
                            style={{ position: "absolute" }}
                          >
                            0
                          </Badge>
                        </Link>
                      </Nav.Link>
                      <Nav.Link eventKey={2}>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="transparent"
                            id="dropdown-basic"
                          >
                            <img
                              style={{ width: "30px" }}
                              src={profile}
                              alt="user"
                            />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              {" "}
                              <Link
                                className="text-decoration-none text-black"
                                to="profile-user"
                              >
                                <img width={25} src={usericon} alt="" />
                                Profile
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item
                              onClick={() => {
                                setIsLoginUser(false);
                              }}
                            >
                              <img width={25} src={logouticon} alt="" />
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Nav.Link>
                    </Nav>
                  </Navbar>
                </Container>
              </Navbar>
            ) : (
              <div className="d-flex">
                <Nav.Link>
                  <button
                    className="register-login"
                    onClick={handleShowregister}
                  >
                    Register
                  </button>
                  <>
                    <Modal
                      show={showregister}
                      onHide={handleCloseRegister}
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title className="modal-title">
                          Register
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Email"
                              autoFocus
                              className="bg-form"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              autoFocus
                              className="bg-form"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Full Name"
                              autoFocus
                              className="bg-form"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Gender"
                              autoFocus
                              className="bg-form"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="number"
                              placeholder="Phone Number"
                              autoFocus
                              className="bg-form"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <select
                              class="form-select bg-form"
                              aria-label="Default select example"
                            >
                              <option selected autoFocus className="text.form">
                                As Admin/User
                              </option>
                              <option value="1">As Admin</option>
                              <option value="2">As User</option>
                            </select>
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onClick={() => {
                            handleCloseLogin();
                          }}
                          className="w-100 bg-brown bold"
                        >
                          Register
                        </Button>
                        <div className="mx-auto">
                          <p>
                            Already have an account ? Klik{" "}
                            <strong
                              onClick={() => {
                                handleShowlogin();
                                handleCloseRegister();
                              }}
                            >
                              Here
                            </strong>
                          </p>
                        </div>
                      </Modal.Footer>
                    </Modal>
                  </>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <button onClick={handleShowlogin} className="register-login">
                    Login
                  </button>
                  <>
                    <Modal
                      show={showlogin}
                      onHide={handleCloseLogin}
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title className="modal-title">Login</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Email"
                              autoFocus
                              value={form.email}
                              name="email"
                              onChange={handleOnChange}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              autoFocus
                            />
                          </Form.Group>

                          <Button
                            onClick={handleOnSubmit}
                            type="submit"
                            className="w-100 bg-brown bold"
                          >
                            Login
                          </Button>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <div className="mx-auto">
                          <p>
                            Don't have an account ? Klik{" "}
                            <strong
                              onClick={() => {
                                handleShowregister();
                                handleCloseLogin();
                              }}
                            >
                              Here
                            </strong>
                          </p>
                        </div>
                      </Modal.Footer>
                    </Modal>
                  </>
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
