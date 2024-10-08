import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Cancel from "../../payment-denied.svg";

const StripePaymentCancel = () => {
  const Random = (props) => {
    var max = 100;
    var randomno = Math.random() * max + 1;
    return <div>{randomno}</div>;
  };
  const history = useHistory();

  return (
    <>
      <div className="success-verified-body">
        <Navbar />
        <div className="main-content-success-verify">
          <div className="container-fluid">
            <div className=" pt-5 text-center mx-auto my-auto">
              <img src={Cancel} alt="" height="305" width="305" />
              <div className="text-center success-verified-header mt-0">
                Oops! Your payment has been cancelled.
              </div>
              <div className="col-md-12 mt-3 para">
                Kindly report to student section with the reference number for
                payment confirmation or email to
                <a href="mailto:ss@example.com"> ss@example.com</a>.
              </div>
              <div className="refer mt-3">
                The Reference number is
                <span>
                  <Random />
                </span>
              </div>
              <div className="success-email-button  mx-auto mb-5 col-md-6">
                <button
                  type="submit"
                  name="success-verified"
                  id="success-verified"
                  onClick={() => history.push("/")}
                  className="submit btn btn-lg btn-block"
                >
                  <div className="verified-button-text">
                    <span>Go to Home Page</span>
                    <span className="arrow-verified"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default StripePaymentCancel;
