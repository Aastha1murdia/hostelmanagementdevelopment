import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import image1 from "../images/computerscience.jpg";
import image2 from "../images/electricalmechanical.jpg";
import image3 from "../images/firstyear.jpg";
import image4 from "../images/university.jpg";
import image5 from "../images/convocation.jpg";
import image6 from "../images/convocation1.jpg";
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
            <img className="d-block w-100" src={image4} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">University</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">Computer Science Block</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">
                Electrical and Mechanical Department Block
              </h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">Basic Science Block</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={image5} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">Convocation 2020</h1>
              <h4>CTAE, Udaipur</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image6} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-header-class">Convocation 2020</h1>
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
