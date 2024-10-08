import React from "react";
import "./About.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Card from "../card/Card";
function About() {
  return (
    <div className="abt-bdy">
      <Navbar />
      <div className="about-body ">
        <h2 className="mt-3">College Of Technology And Engineering</h2>
        <p className="clgdesc">
          The College of Technology and Engineering (CTAE), is a public
          engineering college located in Udaipur, Rajasthan, India. It is one of
          the top ranking engineering institute of the state offering varied
          courses in engineering.The CTAE has been awarded best engineering
          college award in northern region by the National Institute of
          Technical Teachers Training Institute Chandigarh for the year 2012-13.
          CTAE has been ranked 82nd in All India Ranking by the National
          Institutional Ranking Framework (NIRF) of MHRD.The CTAE ranks 3rd in
          Rajasthan after IIT Jodhpur and MNIT Jaipur.Presently the CTAE has
          undergraduate degree programmes in 8 branches, M.Tech. programmes in
          12 disciplines, besides an MBA programme in Engineering and PhD
          programmes in 9 disciplines.The institute has following major
          facilities: Laboratories,Library,Cafeteria,Medical
          facility,Academic/Administrative block,Indoor & Outdoor sports
          facility,Workshops,Hostel facilityThe college has 5 boys hostels and 1
          girls hostel.
        </p>
        <hr />
        <h4 className="hostel">Hostels</h4>
        <div className="containter">
          <div className="row ">
            <div className="mb-5 col-md-4 col-sm-12">
              <Card
                hostel="Netaji Subhash Chandra Bose Hostel"
                room="101-146"
                totalRoom="46"
                Scharge="Not Available"
                Dcharge="40000 Rs"
                mess="28000 Rs"
              />
            </div>
            <div className="mb-5 col-md-4 col-sm-12 ">
              <Card
                hostel="A.N Khosla Hostel"
                room="1-55"
                totalRoom="55"
                Scharge="Not Available"
                Dcharge="41000 Rs"
                mess="30000 Rs"
              />
            </div>
            <div className=" mb-5 col-md-4 col-sm-12">
              <Card
                hostel="GSM Hostel"
                room="101-157"
                totalRoom="57"
                Scharge="58000 Rs"
                Dcharge="Not Available "
                mess="30000 Rs"
              />
            </div>
            <div className="mb-5 col-md-4 col-sm-12">
              <Card
                hostel="PHD Hostel"
                room="1-18"
                totalRoom="18"
                Scharge="Not Available"
                Dcharge="48000"
                mess="35000"
              />
            </div>
            <div className="mb-5 col-md-4 col-sm-12 ">
              <Card
                hostel="MV Hostel"
                room="101-173"
                totalRoom="73"
                Scharge="Not Available"
                Dcharge="40000"
                mess="32000"
              />
            </div>
            <div className=" mb-5 col-md-4 col-sm-12">
              <Card
                hostel="CTAE Girl's Hostel"
                room="A-Block(1-87), B-Block(88-135)"
                totalRoom="135"
                Scharge="Not Available"
                Dcharge="41000"
                mess="30000"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
