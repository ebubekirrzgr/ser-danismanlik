import './footer-top.scss';

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../../assets/png/Logo.png';

function FooterTop() {
  return (
    <div>
      <Navbar className="footer-top" bg="light" variant="light">
        <Container>
          {/* Footer Contact */}

          <div className="contact">
            <img src={logo} alt="logo" />
            <p className="adress">
              2464 Royal Ln undefined Mesa, New Jersey 45463 United States.
            </p>
            <p className="tel">(208) 555-0112</p>
            <p className="email">nevaeh.simmons@example.com</p>
          </div>
          {/* Footer Link Container Start */}
          <div className="footer-link-container">
            {/* Footer Link Container Column 1 */}

            <div className="footer-links">
              <Nav className="flex-column footer-links-column">
                <Nav.Link href="#legals">Legals</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about-us">About Us</Nav.Link>
                <Nav.Link href="#contacts">Contacts</Nav.Link>
                <Nav.Link href="#license">License</Nav.Link>
              </Nav>
            </div>
            {/* Footer Link Container Column 2 */}

            <div className="footer-links">
              <Nav className="flex-column footer-links-column">
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#design-kit">Design Kit</Nav.Link>
                <Nav.Link href="#components">Components</Nav.Link>
                <Nav.Link href="#elements">Elements</Nav.Link>
                <Nav.Link href="#illustrations">Illustrations</Nav.Link>
              </Nav>
            </div>
            {/* Footer Link Container Column 3 */}

            <div className="footer-links">
              <Nav className="flex-column footer-links-column">
                <Nav.Link href="#site-map">Site Map</Nav.Link>
                <Nav.Link href="#icons">Icons</Nav.Link>
                <Nav.Link href="#photos">Photos</Nav.Link>
                <Nav.Link href="#templates">Templates</Nav.Link>
                <Nav.Link href="#fonts">Fonts</Nav.Link>
              </Nav>
            </div>
            {/* Footer Link Container Column 4 */}

            <div className="footer-links">
              <Nav className="flex-column footer-links-column">
                <Nav.Link href="#social-media">Social Media</Nav.Link>
                <Nav.Link href="#facebook">Facebook</Nav.Link>
                <Nav.Link href="#twitter">Twitter</Nav.Link>
                <Nav.Link href="#instagram">Instagram</Nav.Link>
                <Nav.Link href="#linkedin">Linkedin</Nav.Link>
              </Nav>
            </div>
          </div>
          {/* Footer Link Container End */}
        </Container>
      </Navbar>
    </div>
  );
}

export default FooterTop;
