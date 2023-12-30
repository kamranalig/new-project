import React, { useState, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "/Assets/logo.png";
const HeaderComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleLogin = (event) => {
    toggleModal();
    alert(
      `Username: ${usernameRef.current.value} Password: ${passwordRef.current.value} Remember: ${rememberRef.current.checked}`
    );
    event.preventDefault();
  };

  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav}></NavbarToggler>
          <NavbarBrand className="mr-auto" href="/">
            <img
              src={logo}
              alt="Ristorante COn Fusion"
              height="30"
              width="41"
            />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg">About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg">Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg">Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in fa-lg"></span>Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>
                We take inspiration from the Word's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <FormGroup onSubmit={handleLogin}>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              innerRef={usernameRef}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="username">Password</Label>
            <Input
              type="password"
              id="Password"
              name="password"
              innerRef={passwordRef}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="remember" innerRef={rememberRef} />
              Remember me
            </Label>
          </FormGroup>
          <Button type="submit" value="submit" color="primary">
            Login
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default HeaderComponent;
