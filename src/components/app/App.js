import "./App.css";
import React, { useState, useCallback } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Gallery from "../gallery/Gallery";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import StripePaymentCancel from "../payment/StripePaymentCancel";
import StripePaymentSuccess from "../payment/StripePaymentSuccess";
import Error from "../error-404/Error";
import { AuthContext } from "../../auth-content";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);
  return (
    <>
      <Route>
        <AuthContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            userId: userId,
            login: login,
            logout: logout,
          }}
        >
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/gallery" exact>
              <Gallery />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/registration" exact>
              <Registration />
            </Route>
            <Route path="/cancel" exact>
              <StripePaymentCancel />
            </Route>
            <Route path="/success" exact>
              <StripePaymentSuccess />
            </Route>
            <Route component={Error} />
          </Switch>
        </AuthContext.Provider>
      </Route>
    </>
  );
}

export default App;
