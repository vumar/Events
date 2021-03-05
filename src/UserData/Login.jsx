import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

function Login({ onSignUp, onDash }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showAlert = (e) => {
    console.log(e);
  };

  const inputValue = () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    axios
      .post(`${url}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        toast("Logged in succesfully");
        console.log("login Sucess", res.data.token);
        localStorage.setItem("token", res.data.token);
        onDash();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
        console.log("Login Failed", JSON.stringify(err.response.data.error));
      });
  };

  return (
    <div className="App">
      <div className="maindiv">
        <div className="header">
          <h2>Login Page</h2>
        </div>
        <form>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input"
            onInput={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input"
            onInput={(e) => setPassword(e.target.value)}
          />
          <div className=" text-start ms-5">
            <i className="far fa-check-square">
              <span className="ms-2" onClick={(e) => showAlert(e)}>
                I agree all Statements in
                <a className="link">Terms of Service</a>
              </span>
            </i>
          </div>
        </form>

        <button className="bttn btn-primary" onClick={() => inputValue()}>
          Sign In
        </button>

        <p className="fs-6 mt-4">
          Don't have an account ?<a onClick={() => onSignUp()}>Register Here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
