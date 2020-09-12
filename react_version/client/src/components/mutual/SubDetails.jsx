import React from "react";
import "./subDetails.css";

function SubDetails({ subDetails }) {
  return (
    <React.Fragment>
      <h2 className="sub-heading">{subDetails.heading}</h2>
      {subDetails.paragraph.map((subParagraghDetails) => {
        return <p>{subParagraghDetails}</p>;
      })}
    </React.Fragment>
  );
}

export default SubDetails;
