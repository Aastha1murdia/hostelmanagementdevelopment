import { useHistory } from "react-router-dom";
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Success from "../../success-pay.svg";
import "./Payment.css";
import { jsPDF } from "jspdf";


const StripePaymentSuccess = () => {
  const history=useHistory();
  
  const pdfDownload = e => {
    e.preventDefault()
    let doc = new jsPDF("landscape", 'pt', 'A4');
    doc.html(document.getElementById('pdf-view'), {
      callback: () => {
        doc.save('test.pdf');
      }
    });
  }
  
  const Random = (props) => {
    var max = 10000000000000000;
    var randomno = Math.random() * max + 1;
    return <div>{randomno}</div>;
  };

  return (
    <>
        <Navbar />

        <div className="main-content-success-payment">
          <div className="container-fluid col-md-12">
            <div className="pt-0 text-center">
              <img src={Success} alt="" className="img-success-pay" />
              <div id="pdf-view" style={{textAlign:"center",marginRight:"100px",marginTop:"70px"}} >
              <div className=" success-verified-header mt-0">
                Payment Successful
              </div>
              <div className="col-md-12 mt-3 para">
                We appreciate your payment! If having any doubt, please contact
                student section or email
                <a href="mailto:ss@example.com"> ss@example.com</a>.
              </div>
              <div className="refer">
                The Reference number is
                <span>
                  <Random />
                </span>
              </div>
              <div className="para">
                Kindly report to student section with the reference number for
                payment confirmation
              </div>

              <div className="success-email-button text-center mx-auto  mb-5">
                <button
                  type="submit"
                  name="success-verified"
                  id="success-verified"
                  onClick={() => history.push("/")}
                  className="submit btn btn-sm btn-block"
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
        <div className="previous mt-5">
          <button className="btn py-2 px-3 linktomenu" onClick={pdfDownload}>
            Download as pdf
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default StripePaymentSuccess;
