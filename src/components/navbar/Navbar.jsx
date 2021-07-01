import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip,OverlayTrigger } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
const Navbar = () => {
  useEffect(() => {
    handleLogout();
  }, []);

  const [profileName,setProfileName]=useState("");
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {`Hello ${profileName}`}
    </Tooltip>
  );

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
      setProfileName(dataLogin.name);
    }
  };
  // 
  return (
    <>
      <div className="col-md-12 bg-darks navbar-body">
        <nav className="navbar navbar-expand-lg col-md-12 mx-auto navbar-light bg-darks">
          <img
            src="https://www.ctae.ac.in/assets/images/logo-mpuat.png"
            alt="CTAE, Udaipur"
            height="95"
            width="275"
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
                  to="/team"
                >
                  <span>TEAM</span>
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
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <img
                      src={imageUrl}
                      height="60"
                      width="60"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom" 
                      className="image-profile"
                      alt=""
                    />
                  </OverlayTrigger>
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
