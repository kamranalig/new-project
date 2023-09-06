import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Heelo");
  };
  const handleClick = () => {
    console.log(name);
  };
  return (
    <div className="registerContainer">
      <div className="registerHaading">
        <h2>Registration Form</h2>
      </div>
      <div className="RegisterForm">
        <form onSubmit={handleSubmit}>
          <div className="inputFiled">
            <input
              type="text"
              className="inputField"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => handleInputChange(setName(e.target.value))}
            />
          </div>
          <div className="inputFiled">
            <input
              type="email"
              className="inputField"
              name={email}
              value={email}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="inputFiled">
            <input
              type="Password"
              value={password}
              placeholder="Enter a Password"
              className="inputField"
            />
          </div>
          <div className="inputFiled">
            <input
              type="Password"
              value={confirmPassword}
              placeholder="Confrim Your Password"
              className="inputField"
            />
          </div>
          <div className="buttonField inputFiled">
            <button className="registerBtn" onClick={handleClick}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
