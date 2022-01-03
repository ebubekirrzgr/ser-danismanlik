import './footer-bottom.scss';

import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import facebook from '../../../assets/png/fb.png';
import twitter from '../../../assets/png/twit.png';
import instagram from '../../../assets/png/ig.png';

function FooterBottom() {
  return (
    <div>
      <Navbar className="footer-bottom" bg="light" variant="light">
        <Container>
          <Nav className="me-auto social-medias">
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
          <Nav className="me-auto copyright">
            <p>Copyright @ 2020 Themesmile</p>
          </Nav>
          <Nav className="me-auto terms">
            <Nav.Link href="#home">Legals</Nav.Link>
            <Nav.Link href="#services">Term & Conditions</Nav.Link>
            <Nav.Link href="#downloads">License</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default FooterBottom;
