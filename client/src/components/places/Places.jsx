import React, { useContext } from "react";
import "./places.css";
import Varanasi from "../../images/varanasi.jpg";
import { DetailsContext } from "../../context/context";

function Places() {
  const { places } = useContext(DetailsContext);
  const { title, article } = places;
  return (
    <React.Fragment>
      <img src={Varanasi} alt="Varanasi" className="img-fluid" />
      <div className="container">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12 grey-open-sans-text">
          <h1 className="main-heading mt-4">{title}</h1>
          {article.map((subDetails) => {
            return (
              <>
                <h2 className="sub-heading">{subDetails.heading}</h2>
                {subDetails.paragraph.map((subParagraghDetails) => {
                  return <p>{subParagraghDetails}</p>;
                })}
              </>
            );
          })}
          <h2 className="places-last-heading mt-4">
            Hire cab for Top 10 Tourist destinations in Varanasi at Minimum
            cost.
          </h2>
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Places;
