import React from "react";
import "./card.css";
// import abc from "../../images/"

function Card({ article }) {
  const {
    image,
    imageBlog,
    heading,
    paragraph,
    subHeading,
    blogPost,
  } = article;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card p-4 mb-4">
              <img
                src={image}
                className="card-img-top img-fluid rounded"
                alt="product"
              />
              <div className="card-footer px-0">
                <h3>
                  <a href="/" className="heading font-weight-bold">
                    {heading}
                  </a>
                </h3>
                <p className="card-paragraph px-0">
                  {paragraph}
                  <a href="/places" className="text-success">
                    ...Read More
                  </a>
                  <h4 className="sub-heading mt-3">{subHeading}</h4>
                </p>
                <hr />
                <div className="blog-post"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
