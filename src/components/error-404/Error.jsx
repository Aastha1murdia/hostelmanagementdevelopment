import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Error404 from "../../404.svg";

const Error = () => {
  const history = useHistory();

  return (
    <>
      <div className="success-verified-body">
        <Navbar />
        <div className="main-content-success-verify">
          <div className="container-fluid">
            <div className=" pt-5 text-center mx-auto my-auto">
              <img src={Error404} alt="" height="305" width="305" />
              <div className="text-center success-verified-header mt-0">
                Oops! Page Not Found
              </div>

              <div className="success-email-button  mx-auto mb-5 col-md-5">
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

export default Error;
