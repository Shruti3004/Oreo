import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavbarComponent";
import Home from "./components/home/Home";
import KashiVishwanath from "./components/kashiVishwanath/KashiVishwanath";
import TaxiService from "./components/taxiService/TaxiService";
import CarHire from "./components/carHire/CarHire";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Places from "./components/places/Places";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/kashiVishwanath" component={KashiVishwanath} />
          <Route path="/places" component={Places} />
          <Route path="/carHire" component={CarHire} />
          <Route path="/taxiService" component={TaxiService} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
