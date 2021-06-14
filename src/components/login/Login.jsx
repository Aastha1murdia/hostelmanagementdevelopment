import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { AuthContext } from "../../auth-content";
import { ToastContainer, toast } from "react-toastify";
import LoginImg from "../../login.svg";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/Footer";

function Login() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [disable, setDisable] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const [error, setError] = useState();

  const saveLogin = async (values) => {
    try {
      const data = {
        email: values.email,
        password: values.password,
      };
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (!response.ok) {
        toast.error(`🎃 invalid credentials entered 🎃`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setIsLogin(true);
        auth.login();
        const data = {
          email: values.email,
          password: values.password,
          image: responseData.image,
        };
        localStorage.setItem("login", JSON.stringify(data));
        history.push({
          pathname: "/registration",
          state: {
            _id: responseData._id,
            fname: responseData.fname,
            lname: responseData.lname,
            dname: responseData.dname,
            mname: responseData.mname,
            mobile: responseData.mobile,
            email: responseData.email,
            gender: responseData.gender,
            address: responseData.address,
          },
        });
      }
    } catch (err) {
      toast.warn(`🎃 Server not running 🎃`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(err.message || "something went wrong");
    }
  };

  const validate = (values) => {
    let errors = {};

    if (values.email.length === 0) {
      errors.email = " ";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
      values.email.length > 0
    ) {
      errors.email = `Email is not valid`;
    }

    if (values.password.length === 0) {
      errors.password = " ";
    } else if (values.password.length > 0 && values.password.length < 6) {
      errors.password = `password must be at least of 6 characters`;
    }
    if (errors.email || errors.password) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit(values) {
      saveLogin(values);
    },
  });

  return (
    <>
      <Navbar isLogin={isLogin} />

      <div className=" main-login-page">
        <div className="container-fluid mt-4">
          <div className="img-div-email col-md-4">
            <div className="col-md-12 text-left">
              <img className="hero-login-form" src={LoginImg} alt=" " />
            </div>
          </div>

          <section className="login-form-section border-class  col-md-4">
            <div className="login-heading ">User Login</div>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="form-group form-control-email col-md-12">
                <div className="labels">
                  Email&nbsp;<span className="error">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="form-control form-controls form-control-lg"
                  id="emails"
                  name="email"
                  value={formik.values.email}
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="form-group form-control-email col-md-12">
                <div className="labels">
                  Password&nbsp;<span className="error">*</span>
                </div>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control form-controls form-control-lg"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  value="LOG IN"
                  disabled={disable}
                  className="submit btn btn-lg btn-block "
                >
                  Login
                </button>
              </div>
            </form>
          </section>
        </div>

        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default Login;
