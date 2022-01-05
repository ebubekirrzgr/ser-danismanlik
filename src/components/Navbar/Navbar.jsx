import './navbar.scss';
import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/svg/logo.svg';
import facebook from '../../assets/png/facebook.png';
import twitter from '../../assets/png/twitter.png';
import instagram from '../../assets/png/instagram.png';

export default class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar-wrapper">
          <Container>
            <Nav className="me-auto">
              <img
                src={logo}
                width="100"
                height="60"
                className="d-inline-block align-top"
                alt="Ser Danismanlik"
              />
            </Nav>
            <Nav className="me-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#downloads">Downloads</Nav.Link>
              <Nav.Link href="#contacus">Contact us</Nav.Link>
            </Nav>
            <Nav className="social-media">
              <Nav.Link href="#facebook">
                <img src={facebook} alt="facebook" />
              </Nav.Link>
              <Nav.Link href="#twitter">
                <img src={twitter} alt="twitter" />
              </Nav.Link>
              <Nav.Link href="#instagram">
                <img src={instagram} alt="instagram" />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
