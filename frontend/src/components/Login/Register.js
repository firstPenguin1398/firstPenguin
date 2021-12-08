import { useState } from "react";
import Axios from "axios";
import "./Register.css";

export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:8080/api/register", {
      username: usernameReg,
      password: passwordReg,
    }).then(response => {
      console.log(response);
    });
  };

  return (
    <div className="registration">
      <h1>Registration</h1>
      <label>Username</label>
      <input
        type="text"
        onChange={e => {
          setUsernameReg(e.target.value);
          console.log(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="text"
        onChange={e => {
          setPasswordReg(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button onClick={register}>Register</button>
    </div>
  );
}
