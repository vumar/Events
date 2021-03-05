import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function SignUp({ onLogin }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ClickingSignUp = () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    axios
      .post(`${url}/user`, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        toast.success("SuccessFully Registered");
        console.log("login Sucess", res);
        onLogin();
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
        console.log("Failed", JSON.stringify(err.response.data));
      });
  };

  return (
    <div className="App">
      <div className="maindiv">
        <div className="header">
          <h2>Create Account</h2>
        </div>
        <form>
          <input
            type="text"
            placeholder="Enter Your name"
            className="input"
            onInput={(e) => setUserName(e.target.value)}
          />
          <br />
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
            <i class="far fa-check-square">
              <span className="ms-2">
                I agree all Statements in
                <a href="" className="link">
                  Terms of Service
                </a>
              </span>
            </i>
          </div>
        </form>

        <button className="bttn btn-primary" onClick={() => ClickingSignUp()}>
          Sign Up
        </button>

        <p className="fs-6 mt-4">
          Have already an account ?
          <span>
            <a className="link" onClick={() => onLogin()}>
              Login Here
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
