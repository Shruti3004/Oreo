import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function NavbarComponent() {
  return (
    <>
      <div>
        <Navbar center expand="lg" className="nav-background py-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="container">
              <Nav className="mr-auto">
                <Nav.Link
                  href="/home"
                  active
                  className="text-uppercase px-3 py-3 font-weight-bold navbar-item text-white text-center"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/"
                  className="text-uppercase px-3 py-3 font-weight-bold navbar-item text-white text-center"
                >
                  Kashi Vishwanath
                </Nav.Link>
                <Nav.Link
                  href="/"
                  className="text-uppercase px-3 py-3 font-weight-bold navbar-item text-white text-center"
                >
                  Top 10 tourist places in Varanasi
                </Nav.Link>
                <Nav.Link
                  href="/"
                  className="text-uppercase px-3 py-3 font-weight-bold navbar-item text-white text-center"
                >
                  Car Hire
                </Nav.Link>
                <Nav.Link
                  href="/"
                  className="text-uppercase px-3 py-3 font-weight-bold navbar-item text-white text-center"
                >
                  Taxi Service
                </Nav.Link>
                <Nav.Link
                  href="/"
                  className="text-uppercase px-3 py-3 font-weight-bold navbar-item text-white text-center"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className="text-uppercase px-3 py-3 font-weight-bold navbar-item navbar-item-last text-white text-center"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarComponent;
