import React, { useContext } from "react";
import "./about.css";
import Varanasi from "../../images/varanasi.jpg";
import { DetailsContext } from "../../context/context";

function About() {
  const { about } = useContext(DetailsContext);
  const { title, intro, article } = about;
  return (
    <React.Fragment>
      <img src={Varanasi} alt="Varanasi" className="img-fluid" />
      <div className="container">
        <div className="col-lg-8 col-md-10 col-sm-12 col-12 grey-open-sans-text">
          <h1 className="main-heading mt-4">{title}</h1>
          {intro.map((introdetail) => {
            return <p>{introdetail}</p>;
          })}
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
          <h2 className="about-last-heading mt-4">
            Hire cab for About us - Book a Taxi or Car Hire services in Varanasi
            at Minimum cost.
          </h2>
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
