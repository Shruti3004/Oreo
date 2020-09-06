import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { NavLink } from "react-router-dom";
function NavbarComponent() {
  return (
    <React.Fragment>
      <div>
        <Navbar
          center
          expands="lg"
          className="nav-background py-0"
          sticky="top"
        >
          <Navbar.Brand href="/">
            <span className="text-white font-weight-bold">
              Taxi in Varanasi
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="container">
              <Nav className="ml-auto">
                {/* <Nav.Link> */}
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Home
                </NavLink>
                {/* </Nav.Link> */}
                {/* <Nav.Link> */}
                <NavLink
                  to="/kashiVishwanath"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Kashi Vishwanath
                </NavLink>
                {/* </Nav.Link> */}

                {/* <Nav.Link> */}
                <NavLink
                  to="/places"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Top 10 tourist places in Varanasi
                </NavLink>
                {/* </Nav.Link> */}

                {/* <Nav.Link> */}
                <NavLink
                  to="/carHire"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Car Hire
                </NavLink>
                {/* </Nav.Link> */}

                {/* <Nav.Link> */}
                <NavLink
                  to="/taxiService"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  Taxi Service
                </NavLink>
                {/* </Nav.Link> */}

                {/* <Nav.Link> */}
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item text-white text-center"
                >
                  About Us
                </NavLink>
                {/* </Nav.Link> */}

                {/* <Nav.Link> */}
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="text-uppercase px-3 font-weight-bold navbar-item navbar-item-last mx-auto text-white text-center"
                >
                  Contact
                </NavLink>
                {/* </Nav.Link> */}
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
