import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
const Navbar = () => {
  useEffect(() => {
    handleLogout();
  }, []);

  const [whatisup, setWhatIsUp] = useState("LOG IN");
  const [imageUrl, setImageUrl] = useState("");
  const handleLogout = () => {
    const data = localStorage.getItem("login");
    const dataLogin = JSON.parse(data);
    if (whatisup === "LOG OUT") {
      localStorage.removeItem("login");
      setWhatIsUp("LOG IN");
    }
    if (data) {
      setWhatIsUp("LOG OUT");
      setImageUrl(dataLogin.image);
    }
  };

  return (
    <>
      <div className="col-md-12 bg-darks navbar-body">
        <nav className="navbar navbar-expand-lg col-md-12 mx-auto navbar-light bg-darks">
          <img
            src="https://www.ctae.ac.in/assets/images/logo-mpuat.png"
            alt=""
            className=""
            height="90"
            width="280"
          />
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item ">
                <NavLink
                  exact
                  className="links-nav text-decoration-none"
                  activeClassName="active-classs"
                  to="/"
                >
                  <span>HOME</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="links-nav text-decoration-none"
                  activeClassName="active-classs"
                  to="/about"
                >
                  <span>ABOUT</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="links-nav text-decoration-none"
                  activeClassName="active-classs"
                  to="/gallery"
                >
                  <span>HOSTELS</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="links-nav text-decoration-none"
                  activeClassName="active-classs"
                  to="/contact"
                >
                  <span>CONTACT US</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="links-nav text-decoration-none"
                  activeClassName="active-classs"
                  to="/login"
                >
                  <span onClick={handleLogout}>{whatisup}</span>
                </NavLink>
              </li>
              {imageUrl && (
                <li className="nav-item ">
                  <img
                    src={imageUrl}
                    height="60"
                    width="60"
                    className="image-profile"
                    alt=""
                  />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
