import React, { useContext } from "react";
import "./carHire.css";
import Varanasi from "../../images/varanasi.jpg";
import { DetailsContext } from "../../context/context";
import SubDetails from "../mutual/SubDetails";

function CarHire() {
  const { carHire } = useContext(DetailsContext);
  const { title, intro, article } = carHire;
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
            return <SubDetails key={subDetails.id} subDetails={subDetails} />;
          })}
          <h2 className="carHire-last-heading mt-4">
            Hire cab for Car Hire in Varanasi at Minimum cost.
          </h2>
          <hr />
          <div className="blog-post mb-3 mt-0">
            <i className="fas fa-user" /> 4500+ pickups&nbsp;&nbsp;&nbsp;
            <i className="fas fa-calendar" /> We will wait for
            you&nbsp;&nbsp;&nbsp;
            <i className="fas fa-comment" /> Fastest Cab in
            Varanasi&nbsp;&nbsp;&nbsp;
            <i className="fas fa-heart" /> 5 favourites&nbsp;&nbsp;&nbsp;
            <i className="fas fa-eye" /> 1.128k views
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CarHire;
