import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function NavbarComponent() {
  return (
    <React.Fragment>
      <div>
        <Navbar center expand="lg" className="nav-background py-0" fixed="top">
          <Navbar.Brand href="/">
            <span className="text-white font-weight-bold">
              Taxi in Varanasi
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="container">
              <Nav className="mx-auto">
                <Nav.Link
                  href="/"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/kashiVishwanath"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Kashi Vishwanath
                </Nav.Link>
                <Nav.Link
                  href="/places"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Top 10 tourist places in Varanasi
                </Nav.Link>
                <Nav.Link
                  href="/carHire"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Car Hire
                </Nav.Link>
                <Nav.Link
                  href="/taxiService"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Taxi Service
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className="text-uppercase px-3 font-weight-bold navbar-item navbar-item-last mx-auto text-white text-center"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
          <Nav.Link
            href="/contact"
            className="text-uppercase font-weight-bold text-white text-center"
          >
            <i className="fas fa-phone-alt icon-size"></i>
          </Nav.Link>
        </Navbar>
      </div>
    </React.Fragment>
  );
}

export default NavbarComponent;
