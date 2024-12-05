import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="container-fluid ">
        <div className="  col-md-12 ">
          <div className="card ">
            <h5>{props.hostel}</h5>
            <p>{props.description}</p>
            <h className="features">
              <span>Room No.:</span>
              {props.room}
            </h>
            <h className="features">
              <span>Total Room:</span>
              {props.totalRoom}
            </h>
            <h className="features">
              <span>Single Seated Charges(per year):</span>
              {props.Scharge}
            </h>
            <h className="features">
              <span>Double Seated Charges(per year):</span>
              {props.Dcharge}
            </h>
            <h className="features">
              <span>Mess Charges(per year):</span>
              {props.mess}
            </h>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
