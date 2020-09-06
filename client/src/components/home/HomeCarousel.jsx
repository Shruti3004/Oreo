import React from "react";

function HomeCarousel() {
  return (
    <React.Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="img">
            <img
              src={team1}
              alt=""
              className="d-block mx-auto img-fluid"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            />
          </div>
          <h2 className="text-dark text-center font-weight-bold">
            Ghanshyam Matlane
          </h2>
          <p className="text-dark text-center pb-5">
            I like all the test and questions. They are very intresting to solve
            <br></br>
            and solve and important in my subjects and studies also.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img">
            <img
              src={team1}
              alt=""
              className="d-block mx-auto img-fluid"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            />
          </div>
          <h2 className="text-dark text-center font-weight-bold">
            Ghanshyam Matlane
          </h2>
          <p className="text-dark text-center pb-5">
            I like all the test and questions. They are very intresting to solve
            <br></br>
            and solve and important in my subjects and studies also.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img">
            <img
              src={team1}
              alt=""
              className="d-block mx-auto img-fluid"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            />
          </div>
          <h2 className="text-dark text-center font-weight-bold">
            Ghanshyam Matlane
          </h2>
          <p className="text-dark text-center pb-5">
            I like all the test and questions. They are very intresting to solve
            <br></br>
            and solve and important in my subjects and studies also.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img">
            <img
              src={team1}
              alt=""
              className="d-block mx-auto img-fluid"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            />
          </div>
          <h2 className="text-dark text-center font-weight-bold">
            Ghanshyam Matlane
          </h2>
          <p className="text-dark text-center pb-5">
            MissionEd is very good Ed-Tech startup. The teachers are very
            friendly<br></br>
            which makes the class very interactive.
          </p>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default HomeCarousel;
