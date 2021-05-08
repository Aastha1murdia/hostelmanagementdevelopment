import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h4 className="footerheading">About Us</h4>
          <div className="about">
            <p>Amet labore ut eiusmod ipsum in sint dolor </p>
            <p>Amet labore ut eiusmod ipsum in sint dolor </p>
          </div>
          <p className="copyright">HMS©2021</p>
        </div>
        <div className="follow">
          <h4 className="footerheading">Follow Us</h4>
          <a href="/" className="socialmedia">
            <i className=" fab fa-facebook-f"></i>
          </a>
          <a href="/" className="socialmedia">
            <i className=" fab fa-instagram"></i>
          </a>
          <a href="/" className="socialmedia">
            <i className=" fab fa-twitter-square"></i>
          </a>
          <a href="/" className="socialmedia">
            <i className=" fab fa-linkedin"></i>
          </a>
        </div>
        <div className="HAddress">
          <h4 className="footerheading text-left">Address</h4>
          <div className="addr">
            <p>College Of Technology and Engineering Campus,</p>
            <p>University Rd,Pahada,Udaipur,</p>
            <p>Rajasthan,313001</p>
          </div>
        </div>
      </div>
      <hr className="line"></hr>
    </>
  );
}

export default Footer;
