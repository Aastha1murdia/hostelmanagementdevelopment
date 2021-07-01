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
      <section className="text-center py-3" >
      <h1 className="text-left">Locate on Map <i className=" fas fa-map-marker-alt"></i></h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.7904786757226!2d73.73150791455285!3d24.596426084179175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5e8557490a1%3A0x3300ced03e53b3e2!2sCollege%20of%20Technology%20and%20Engineering!5e0!3m2!1sen!2sin!4v1625154065141!5m2!1sen!2sin" width="1510" height="350" allowfullscreen="" loading="lazy"></iframe></section>
      <Footer />
    </>
  );
}

export default Home;
