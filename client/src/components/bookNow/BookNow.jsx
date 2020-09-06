import React from "react";
import booknow from "../../images/bookNow.png";
import "./booknow.css";

function BookNow() {
  return (
    <React.Fragment>
      <img src={booknow} alt="Book now" className="img-fluid book-now" />
    </React.Fragment>
  );
}

export default BookNow;
