import React from "react";

function Navbar({ onLogin, onHomePage, onSignUp, DataBaseShowing }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h3 className="navbar-brand" onClick={() => onHomePage()}>
          Navbar
        </h3>
        {DataBaseShowing ? (
          <button
            className="btn btn-outline-success ms-2"
            onClick={() => onSignUp()}
          >
            Log Out
          </button>
        ) : (
          <div className="d-flex">
            <button
              className="btn btn-outline-success"
              onClick={() => onSignUp()}
            >
              Sign Up
            </button>
            <button
              className="btn btn-outline-success ml-3 "
              onClick={() => onLogin()}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
