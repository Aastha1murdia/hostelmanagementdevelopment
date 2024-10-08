import React, { useState } from "react";
import "./Registration.css";
import { useFormik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
const stripePromise = loadStripe("pk_test");

const Registration = () => {
  const [radio, setRadio] = useState("male");
  const [dropdown, setDropdown] = useState("select");
  const [hostel, setHostel] = useState("select");
  const [isDisable, setDisable] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [isVerified, setVerified] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!location.state) {
      history.push("/login");
    } else {
      formik.values.fname = location.state.fname;
      formik.values.lname = location.state.lname;
      formik.values.dname = location.state.dname;
      formik.values.mname = location.state.mname;
      formik.values.email = location.state.email;
      formik.values.mobile = location.state.mobile;
      formik.values.address = location.state.address;
      setRadio(location.state.gender);
      setDropdown(location.state.year);
    }
  }, []);

  const handleRecaptcha = async (e) => {
    setVerified(true);
  };

  const validate = (values) => {
    let errors = {};
    if (values.fname.length === 0) {
      errors.fname = " ";
    } else if (values.fname.length > 0 && values.fname.length < 3) {
      errors.fname = `First name must be at least two characters`;
    }
    if (values.dname.length > 0) {
      const trimmedLength = values.dname.trim();
      if (trimmedLength.length === 0) {
        errors.dname = "Fathers name should not be blank spaces";
      }
    }

    if (values.email.length === 0) {
      errors.email = " ";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
      values.email.length > 0
    ) {
      errors.email = `Email is not valid`;
    }

    if (values.mname.length > 0) {
      const trimmedLength = values.mname.trim();
      if (trimmedLength.length === 0) {
        errors.mname = "Mothers name should not be blank spaces";
      }
    }
    if (values.mobile.length === 0) {
      errors.mobile = " ";
    } else if (values.mobile.length > 0 && values.mobile.length < 10) {
      errors.mobile = `mobile number should be at least 10 digits`;
    }

    if (values.lname.length === 0) {
      errors.lname = "Last name should be at least one character";
    }

    return errors;
  };
  let data = {};
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      dname: "",
      mname: "",
      mobile: "",
      email: "",
      address: "",
    },
    validate,
    async onSubmit(values) {
      data = {
        fname: values.fname,
        lname: values.lname,
        dname: values.dname,
        mname: values.mname,
        phone: values.mobile,
        address: values.address,
        email: values.email,
        gender: radio,
        year: dropdown,
        hostel: hostel,
      };
      try {
        setLoading(true);
        setDisable(true);
        const res = await fetch(`http://localhost:8080/registration`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.status == 422) {
          toast.dark(
            `🎃 Email and phone already registered, try different credentials ... 🎃`,
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        } else {
          const stripePromise = loadStripe(
            "pk_test_51J0jwKSAHkJBUNRnwi8hWgJccfofPVoDZhjSFTRQixsCVpYrBOXxNnIpafertxqwuwK2iMFr5iAKI67qO9JuLyKQ00YaLdLMaj"
          );
          const stripe = await stripePromise;

          const response = await fetch(
            "http://localhost:8080/create-checkout-session",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const session = await response.json();

          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });

          if (result.error) {
          }
        }
        setLoading(false);
        setDisable(false);
      } catch (error) {
        console.log(error);
        toast.warn(`🎃 Server not running 🎃`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      }
    },
  });

  return (
    <>
      <div>
        <Navbar />
        <section className="border-class form-registration my-5 mx-auto col-md-9 ">
          <div className="register-heading ">Book Your Room</div>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className="form-group form-control-email col-md-12">
              <div className="labels-registration">
                First Name:&nbsp;<span className="error">*</span>
              </div>

              <input
                type="text"
                id="fname"
                name="fname"
                disabled
                value={formik.values.fname}
                className="form-control form-controls-registration"
                placeholder="Enter Your First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div className="error">{formik.errors.fname}</div>
              ) : null}
            </div>
            <div className="form-group form-control-email col-md-12">
              <div className="labels-registration">
                Last Name:&nbsp;<span className="error">*</span>
              </div>

              <input
                type="text"
                id="lname"
                name="lname"
                value={formik.values.lname}
                disabled
                className="form-control form-controls-registration"
                placeholder="Enter Your Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.lname && formik.errors.lname ? (
                <div className="error">{formik.errors.lname}</div>
              ) : null}
            </div>
            <div className="form-group form-control-email col-md-12">
              <div className="labels-registration">
                Father's Name:&nbsp;<span className="error">*</span>
              </div>

              <input
                type="text"
                id="dname"
                name="dname"
                value={formik.values.dname}
                disabled
                className="form-control form-controls-registration"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Your Father's Name"
                required
              />
              {formik.touched.dname && formik.errors.dname ? (
                <div className="error">{formik.errors.dname}</div>
              ) : null}
            </div>
            <div className="form-group form-control-email col-md-12">
              <div className="labels-registration">
                Mother's Name:&nbsp;<span className="error">*</span>
              </div>

              <input
                type="text"
                id="mname"
                name="mname"
                disabled
                value={formik.values.mname}
                className="form-control form-controls-registration"
                placeholder="Enter Your Mother's Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.mname && formik.errors.mname ? (
                <div className="error">{formik.errors.mname}</div>
              ) : null}
            </div>
            <div className="form-group form-control-email col-md-12">
              <div className="labels-registration">
                Mobile No:&nbsp;<span className="error">*</span>
              </div>

              <input
                type="text"
                id="mobile"
                name="mobile"
                className="form-control form-controls-registration"
                value={formik.values.mobile}
                placeholder="Enter Your mobile Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="error">{formik.errors.mobile}</div>
              ) : null}
            </div>
            <div className="form-group form-control-email col-md-12">
              <div className="labels-registration">
                Email:&nbsp;<span className="error">*</span>
              </div>

              <input
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                className="form-control form-controls-registration"
                placeholder="Enter Your email "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group form-control-email col-md-12">
              <div className="labels-registration">
                Semester:&nbsp;<span className="error">*</span>
              </div>

              <select
                name="year"
                id="year"
                value={dropdown}
                className=" custom-select dropdown-year col-md-12 "
                onChange={(e) => {
                  setDropdown(e.target.value);
                }}
                required
              >
                <option value="select">--Select One--</option>
                <option value="1">1</option>
                <option value="2">3</option>
                <option value="3">5</option>
                <option value="4">7</option>
              </select>
            </div>
            <div className="col-md-12">
              <span className="labels-registration">
                Gender:&nbsp;&nbsp;&nbsp;
              </span>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  value="male"
                  className="form-check-input"
                  checked={radio === "male"}
                  disabled
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                  id="male"
                />
                <label htmlFor="male" className="form-check-label labels">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  value="female"
                  className="form-check-input"
                  checked={radio === "female"}
                  disabled
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                  id="female"
                />
                <label htmlFor="female" className="form-check-label labels">
                  Female
                </label>
              </div>
            </div>
            {radio === "male" && dropdown === "1" && (
              <div className="col-md-12">
                <div className="labels-registration">
                  Hostel:&nbsp;<span className="error">*</span>
                </div>
                <select
                  name="hostel"
                  id="hostel"
                  value={hostel}
                  className=" custom-select dropdown-year col-md-12 "
                  onChange={(e) => {
                    setHostel(e.target.value);
                  }}
                  required
                >
                  <option value={"select"}>--Select One--</option>
                  <option value="AN Khosla Hostel">AN Khosla Hostel</option>)
                </select>
              </div>
            )}

            {radio === "male" && dropdown === "2" && (
              <div className="col-md-12">
                <div className="labels-registration">
                  Hostel:&nbsp;<span className="error">*</span>
                </div>
                <select
                  name="hostel"
                  id="hostel"
                  className=" custom-select dropdown-year col-md-12 "
                  value={hostel}
                  onChange={(e) => {
                    setHostel(e.target.value);
                  }}
                  required
                >
                  <option value="select">--Select One--</option>
                  <option value="MV Hostel">MV Hostel</option>
                </select>
              </div>
            )}

            {radio === "male" && dropdown === "3" && (
              <div className="col-md-12">
                <div className="labels-registration">
                  Hostel:&nbsp;<span className="error">*</span>
                </div>
                <select
                  name="hostel"
                  id="hostel"
                  value={hostel}
                  className=" custom-select dropdown-year col-md-12 "
                  onChange={(e) => {
                    setHostel(e.target.value);
                  }}
                  required
                >
                  <option value={"select"}>--Select One--</option>
                  <option value="NSCB">NSCB</option>
                </select>
              </div>
            )}

            {radio === "male" && dropdown === "4" && (
              <div className="col-md-12">
                <div className="labels-registration">
                  Hostel:&nbsp;<span className="error">*</span>
                </div>
                <select
                  name="hostel"
                  id="hostel"
                  value={hostel}
                  className=" custom-select dropdown-year col-md-12 "
                  onChange={(e) => {
                    setHostel(e.target.value);
                  }}
                  required
                >
                  <option value="select">--Select One--</option>
                  <option value="PG Hostel">PG Hostel</option>
                  <option value="GSM Hostel">GSM Hostel</option>
                </select>
              </div>
            )}
            {radio === "male" && dropdown === "select" && (
              <div className="col-md-12">
                <div className="labels-registration">
                  Hostel:&nbsp;<span className="error">*</span>
                </div>
                <select
                  name="hostel"
                  id="hostel"
                  value={hostel}
                  className=" custom-select dropdown-year col-md-12 "
                  onChange={(e) => {
                    setHostel(e.target.value);
                  }}
                  required
                >
                  <option value="select">--Select One--</option>
                </select>
              </div>
            )}

            {radio === "female" && (
              <div className="col-md-12">
                <div className="labels-registration">
                  Hostel:&nbsp;<span className="error">*</span>
                </div>
                <select
                  name="hostel"
                  id="hostel"
                  className=" custom-select dropdown-year col-md-12 "
                  value={hostel}
                  onChange={(e) => {
                    setHostel(e.target.value);
                  }}
                  required
                >
                  <option value={"select"}>--Select One--</option>
                  <option value={"CTAE Girls Hostel"}>CTAE Girls Hostel</option>
                </select>
              </div>
            )}

            <br />
            <div className="form-group form-control-email col-md-12">
              <div className="labels-registration">
                Permanent Address:&nbsp;<span className="error">*</span>
              </div>

              <input
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                placeholder="Enter Your Address"
                className="form-control form-controls-registration"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleRecaptcha}
              className="col-md-12"
            />
            <div className="col-md-12">
              {!isLoading && (
                <button
                  type="submit"
                  disabled={!isVerified}
                  className="submit btn btn-lg btn-block"
                >
                  Continue to Pay
                </button>
              )}
              {isLoading && (
                <button
                  type="submit"
                  disabled={isDisable}
                  className="submit btn btn-lg btn-block"
                >
                  Continue to Pay... &nbsp;
                  <i className="fas fa-spinner fa-spin"></i>
                </button>
              )}
            </div>
          </form>
        </section>
        <ToastContainer style={{ width: "550px" }} />
      </div>
      <Footer />
    </>
  );
};

export default Registration;
