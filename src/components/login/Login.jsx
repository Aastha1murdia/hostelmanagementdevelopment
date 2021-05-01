import React, { useState } from "react";
import "./Login.css";
import zxcvbn from "zxcvbn";
import { formik, useFormik } from "formik";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
function Login() {
  const [disable, setDisable] = useState(true);
  const validate = (values) => {
    const password = values.password;
    const evaluation = zxcvbn(password);
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
    } else if (evaluation.score < 2) {
      errors.password = `${
        evaluation.feedback.suggestions[1] || evaluation.feedback.suggestions[0]
      }`;
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
      alert(`
      Email entered is: ${values.email}
      Password entered is: ${values.password}`);
    },
  });

  return (
    <div>
      <Navbar />
      <div className="login">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <label htmlFor="email" className="userlbl text-left">
            Username&nbsp;<span className="error">*</span>
          </label>

          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              id="email"
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
          <label htmlFor="pswd" className="pswdlbl">
            Password&nbsp;<span className="error">*</span>
          </label>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
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
          <a href="/registration" className="text-decoration-none span-login">
            <button
              type="submit"
              value="Log In"
              disabled={disable}
              className="submit btn btn-lg btn-block"
            >
              Login
            </button>
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
