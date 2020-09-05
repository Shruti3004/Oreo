import React, { useContext } from "react";
import "./taxiService.css";
import Varanasi from "../../images/varanasi.jpg";
import { DetailsContext } from "../../context/context";
import SubDetails from "../mutual/SubDetails";

function TaxiService() {
  const { taxiService } = useContext(DetailsContext);
  const { title, intro, article } = taxiService;
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
          <h2 className="taxiService-last-heading mt-4">
            Hire cab for Taxi and Cab booking services in Varanasi at Minimum
            cost.
          </h2>
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TaxiService;
