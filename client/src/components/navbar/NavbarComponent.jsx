import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { NavLink } from "react-router-dom";
function NavbarComponent() {
  return (
    <React.Fragment>
      <div>
        <Navbar center expands="lg" className="nav-background py-0" fixed="top">
          <Navbar.Brand href="/">
            <span className="text-white font-weight-bold">
              Taxi in Varanasi
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="container">
              <Nav className="ml-auto">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/kashiVishwanath"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Kashi Vishwanath
                </NavLink>
                <NavLink
                  to="/places"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Top 10 tourist places in Varanasi
                </NavLink>
                <NavLink
                  to="/carHire"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Car Hire
                </NavLink>
                <NavLink
                  to="/taxiService"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Taxi Service
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item navbar-item-last mx-auto text-white text-center"
                >
                  Contact
                </NavLink>
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
