import React, { useState } from "react";
import "./Registration.css";
import { useFormik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration = () => {
  const [radio, setRadio] = useState("male");
  const [dropdown, setDropdown] = useState("select");
  const [hostel, setHostel] = useState("select");
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    formik.values.fname = location.state.fname;
    formik.values.lname = location.state.lname;
    formik.values.dname = location.state.dname;
    formik.values.mname = location.state.mname;
    formik.values.email = location.state.email;
    formik.values.mobile = location.state.mobile;
    formik.values.address = location.state.address;
    setRadio(location.state.gender);
  }, []);

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
        history.push("/payment");
      }
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
              <label htmlFor="fname">
                First Name:&nbsp;<span className="error">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formik.values.fname}
                  placeholder="Enter Your First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.fname && formik.errors.fname ? (
                  <div className="error">{formik.errors.fname}</div>
                ) : null}
              </div>
              <label htmlFor="lname">
                Last Name:&nbsp;<span className="error">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formik.values.lname}
                  placeholder="Enter Your Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.lname && formik.errors.lname ? (
                  <div className="error">{formik.errors.lname}</div>
                ) : null}
              </div>
              <label htmlFor="dname">
                Father's Name:&nbsp;<span className="error">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="dname"
                  name="dname"
                  value={formik.values.dname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Your Father's Name"
                  required
                />
                {formik.touched.dname && formik.errors.dname ? (
                  <div className="error">{formik.errors.dname}</div>
                ) : null}
              </div>
              <label htmlFor="mname">
                Mother's Name:&nbsp;<span className="error">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="mname"
                  name="mname"
                  value={formik.values.mname}
                  placeholder="Enter Your Mother's Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.mname && formik.errors.mname ? (
                  <div className="error">{formik.errors.mname}</div>
                ) : null}
              </div>
              <label htmlFor="mobile">
                mobile No:&nbsp;<span className="error">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
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
              <label htmlFor="email">
                Email:&nbsp;<span className="error">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  placeholder="Enter Your email "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
              <label htmlFor="year">
                Year:&nbsp;<span className="error">*</span>{" "}
              </label>
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
                <div>
                  <label htmlFor="hostel">
                    Hostel:&nbsp;<span className="error">*</span>
                  </label>
                  <select
                    name="hostel"
                    id="hostel"
                    value={hostel}
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
                <div>
                  <label htmlFor="hostel">
                    Hostel:&nbsp;<span className="error">*</span>
                  </label>
                  <select
                    name="hostel"
                    id="hostel"
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
                <div>
                  <label htmlFor="hostel">
                    Hostel:&nbsp;<span className="error">*</span>
                  </label>
                  <select
                    name="hostel"
                    id="hostel"
                    value={hostel}
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
                <div>
                  <label htmlFor="hostel">
                    Hostel:&nbsp;<span className="error">*</span>
                  </label>
                  <select
                    name="hostel"
                    id="hostel"
                    value={hostel}
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
                <div>
                  <label htmlFor="hostel">
                    Hostel:&nbsp;<span className="error">*</span>
                  </label>
                  <select
                    name="hostel"
                    id="hostel"
                    value={hostel}
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
                <div>
                  <label htmlFor="hostel">
                    Hostel:&nbsp;<span className="error">*</span>
                  </label>
                  <select
                    name="hostel"
                    id="hostel"
                    value={hostel}
                    onChange={(e) => {
                      setHostel(e.target.value);
                    }}
                    required
                  >
                    <option value={"select"}>--Select One--</option>
                    <option value={"CTAE Girls Hostel"}>
                      CTAE Girls Hostel
                    </option>
                  </select>
                </div>
              )}

              {radio === "male" && (
                <div>
                  <label htmlFor="hostel">
                    Hostel:&nbsp;<span className="error">*</span>
                  </label>
                  <select
                    name="hostel"
                    id="hostel"
                    value={hostel}
                    onChange={(e) => {
                      setHostel(e.target.value);
                    }}
                    required
                  >
                    <option value={"select"}>--Select One--</option>
                  </select>
                </div>
              )}

              <br />
              <label htmlFor="address">
                Permanent Address:&nbsp;<span className="error">*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  placeholder="Enter Your Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <button type="submit" className="submit btn btn-lg btn-block">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer style={{ width: "550px" }} />
    </>
  );
};

export default Registration;
