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
    var max = 100;
    var randomno = Math.random() * max + 1;
    return <div>{randomno}</div>;
  };

  const history = useHistory();

  return (
    <>
      <div className="success-verified-body">
        <Navbar />
          <div id="pdf-view" >
        <div className="main-content-success-verify">
          <div className="container-fluid">
            <div className=" pt-5 text-center mx-auto my-auto">
              <img src={Success} alt="" height="305" width="305" />
              <div className="text-center success-verified-header mt-0">
                Payment Successful ✌
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
                <div className="previous" style={{ display: 'flex', justifyContent: 'flex-end',marginRight:"40px" }}>
                      {/* <div style={{marginLeft:"400px",marginRight:"400px"}}> */}
                      <button style={{backgroundColor:"blueviolet"}} className="submit btn btn-sm"onClick={pdfDownload}>Download as pdf</button>
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

export default StripePaymentSuccess;
