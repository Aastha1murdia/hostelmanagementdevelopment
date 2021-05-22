import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import zxcvbn from "zxcvbn";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { AuthContext } from "../../auth-content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      const responseData = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (!response.ok) {
        toast.warn(`🎃 invalid credentials entered please try again 🎃`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        throw new Error(id);
      } else {
        setIsLogin(true);
        auth.login();
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
      toast.dark(`🎃 Server not running 🎃`, {
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
      const data = { email: values.email, password: values.password };
      localStorage.setItem("login", JSON.stringify(data));
      saveLogin(values);
    },
  });

  return (
    <div>
      <Navbar isLogin={isLogin} />
      <div className="login">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <label htmlFor="email" className="userlbl text-left">
            Username&nbsp;<span className="error">*</span>
          </label>

          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              id="emails"
              name="emails"
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
          {/* <NavLink to="/registration" className="text-decoration-none"> */}
          <button
            type="submit"
            value="Log In"
            disabled={disable}
            className="submit btn btn-lg btn-block"
          >
            Login
          </button>
          {/* </NavLink> */}
        </form>
      </div>
      <ToastContainer style={{ width: "450px" }} />
    </div>
  );
}

export default Login;
