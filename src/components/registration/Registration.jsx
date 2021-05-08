import React, { Component, useState } from "react";
import "./Registration.css";
import { formik, useFormik } from "formik";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
const Registration = () => {
  const [disable, setDisable] = useState(true);
  const [radio, setRadio] = useState("male");
  const [dropdown, setDropdown] = useState("select");
  const validate = (values) => {
    let errors = {};
    if (values.firstName.length === 0) {
      errors.firstName = " ";
    } else if (values.firstName.length > 0 && values.firstName.length < 3) {
      errors.firstName = `First name must be at least two characters`;
    }
    if (values.fathersName.length > 0) {
      const trimmedLength = values.fathersName.trim();
      if (trimmedLength.length === 0) {
        errors.fathersName = "Fathers name should not be blank spaces";
      }
    }
    if (values.mothersName.length > 0) {
      const trimmedLength = values.mothersName.trim();
      if (trimmedLength.length === 0) {
        errors.mothersName = "Mothers name should not be blank spaces";
      }
    }
    if (values.mobile.length === 0) {
      errors.mobile = " ";
    } else if (values.mobile.length > 0 && values.mobile.length < 10) {
      errors.mobile = `Mobile number should be at least 10 digits`;
    }

    if (values.lastName.length === 0) {
      errors.lastName = "Last name should be at least one character";
    }

    if (errors.firstName || errors.lastName || errors.mobile) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      fathersName: "",
      mothersName: "",
      Year: "",
      gender: "",
      address: "",
    },
    validate,
    onSubmit(values) {
      alert(`
          First Name entered is: ${values.firstName}
          Last Name entered is: ${values.lastName}
          Mobile Number entered is: ${values.mobile}`);
    },
  });

  return (
    <>
      <Navbar />
      <div className="outer_div">
        <div className="container">
          <div className="registerform">
            <h1 className="register">Book Your Room</h1>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <label htmlFor="fname">First Name:</label>
              <div>
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  value={formik.values.firstName}
                  placeholder="Enter Your First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <label htmlFor="lname">Last Name:</label>
              <div>
                <input
                  type="text"
                  id="lname"
                  name="lastName"
                  value={formik.values.lastName}
                  placeholder="Enter Your Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error">{formik.errors.lastName}</div>
                ) : null}
              </div>
              <label htmlFor="dname">Father's Name:</label>
              <div>
                <input
                  type="text"
                  id="dname"
                  name="fathersName"
                  value={formik.values.fathersName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Your Father's Name"
                  required
                />
                {formik.touched.fathersName && formik.errors.fathersName ? (
                  <div className="error">{formik.errors.fathersName}</div>
                ) : null}
              </div>
              <label htmlFor="mname">Mother's Name</label>
              <div>
                <input
                  type="text"
                  id="mname"
                  name="mothersName"
                  value={formik.values.mothersName}
                  placeholder="Enter Your Mother's Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.mothersName && formik.errors.mothersName ? (
                  <div className="error">{formik.errors.mothersName}</div>
                ) : null}
              </div>
              <label htmlFor="phone">Mobile No.</label>
              <div>
                <input
                  type="number"
                  id="phone"
                  name="mobile"
                  values={formik.values.mobile}
                  pattern="[789][0-9]{9}"
                  placeholder="Enter Your Mobile Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="error">{formik.errors.mobile}</div>
                ) : null}
              </div>
              <label htmlFor="year">Year: </label>
              <select
                name="year"
                id="year"
                value={dropdown}
                onChange={(e) => {
                  setDropdown(e.target.value);
                }}
                required
              >
                <option value="select">--Select One--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <label htmlFor="gender">Gender:</label>
              <br />

              <input
                type="radio"
                value="male"
                checked={radio === "male"}
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
                id="male"
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                value="female"
                checked={radio === "female"}
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
                id="female"
              />
              <label htmlFor="female">Female</label>
              <br />

              {radio === "male" && dropdown === "1" && (
                <select name="hostels" id="hostels" required>
                  <option value={"select"}>--Select One--</option>
                  <option value={"1"}>AN Khosla Hostel</option>)
                </select>
              )}

              {radio === "male" && dropdown === "2" && (
                <select name="hostels" id="hostels" required>
                  <option value={"select"}>--Select One--</option>
                  <option value={"2"}>MV Hostel</option>
                </select>
              )}

              {radio === "male" && dropdown === "3" && (
                <select name="hostels" id="hostels" required>
                  <option value={"select"}>--Select One--</option>
                  <option value={"3"}>NSCB</option>
                </select>
              )}

              {radio === "male" && dropdown === "4" && (
                <select name="hostels" id="hostels" required>
                  <option value={"select"}>--Select One--</option>
                  <option value={"5"}>PG Hostel</option>
                  <option value={"4"}>GSM Hostel</option>
                </select>
              )}
              {radio === "male" && dropdown === "select" && (
                <select name="hostels" id="hostels" required>
                  <option value={"select"}>--Select One--</option>
                </select>
              )}

              {radio === "female" && (
                <select name="hostels" id="hostels" required>
                  <option value={"select"}>--Select One--</option>
                  <option value={"1"}>CTAE Girls Hostel</option>
                </select>
              )}

              <br />
              <label htmlFor="address">Permanent Address:</label>
              <textarea name="address" id="address" />
              <a
                href="/registration"
                className="text-decoration-none span-login"
              >
                <button
                  type="submit"
                  disabled={disable}
                  className="submit btn btn-lg btn-block"
                >
                  Register
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
