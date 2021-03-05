import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./UserData/HomePage";
import Login from "./UserData/Login";
import Navbar from "./UserData/Navbar";
import SignUp from "./UserData/SignUp";
import DashBoard from "./UserData/DashBoard";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showDashBoard, setShowDashBoard] = useState(false);

  const ShowLoginFn = () => {
    setShowHomePage(false);
    setShowLogin(true);
    setShowSignUp(false);
    setShowDashBoard(false);
  };

  const ShowHomePageFn = () => {
    setShowHomePage(true);
    setShowLogin(false);
    setShowSignUp(false);
    setShowDashBoard(false);
  };
  const ShowSignUpFn = () => {
    setShowHomePage(false);
    setShowLogin(false);
    setShowSignUp(true);
    setShowDashBoard(false);
  };
  const showDashBoardFn = () => {
    setShowHomePage(false);
    setShowLogin(false);
    setShowSignUp(false);
    setShowDashBoard(true);
  };

  return (
    <div className="App">
      <ToastContainer />
      <Navbar
        onLogin={ShowLoginFn}
        onHomePage={ShowHomePageFn}
        onSignUp={ShowSignUpFn}
        DataBaseShowing={showDashBoard}
      />
      {showHomePage && <HomePage />}
      {showLogin && <Login onSignUp={ShowSignUpFn} onDash={showDashBoardFn} />}
      {showSignUp && <SignUp onLogin={ShowLoginFn} onDash={showDashBoardFn} />}
      {showDashBoard && <DashBoard onHomePage={ShowHomePageFn} />}
    </div>
  );
}

export default App;
