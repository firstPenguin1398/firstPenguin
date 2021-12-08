import { useState } from "react";
import Axios from "axios";
import "./Login.css";

export default function Login() {
  const [loginname, setLoginname] = useState("");
  const [loginpw, setLoginpw] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:8080/api/login", {
      loginName: loginname,
      loginPw: loginpw,
    }).then(response => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username..."
        onChange={e => {
          setLoginname(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password..."
        onChange={e => {
          setLoginpw(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
      <h1>{loginStatus}</h1>
    </div>
  );
}
