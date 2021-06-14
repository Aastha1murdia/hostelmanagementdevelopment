import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import image1 from "../images/jumbotron-1.jpg";
import image2 from "../images/jumbotron-2.jpg";
import image3 from "../images/jumbotron-3.jpg";
function Home() {
  return (
    <>
      <Navbar />

      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-1"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">MPUAT</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">MPUAT</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">MPUAT</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Home;
