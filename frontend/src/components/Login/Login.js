import { useState } from "react";
import Axios from "axios";
import "./RegisterLogin.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
        setLoginStatus(
          response.data[0].username + "님이 로그인에 성공했습니다!"
        );
      }
    });
  };

  return (
    <div className="title">
      <h1>로그인</h1>
      <div className="titleForm">
        <Box
          component="form"
          sx={{
            m: "auto",
            width: "50ch",
            display: "inline-block",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ width: 400 }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={e => {
              setLoginname(e.target.value);
              console.log(e.target.value);
            }}
          />
          <div className="emptyBox"></div>
          <TextField
            sx={{ width: 400 }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={e => {
              setLoginpw(e.target.value);
              console.log(e.target.value);
            }}
          />
        </Box>
      </div>
      <Button variant="contained" onClick={login} size="large" sx={{ mt: 6 }}>
        로그인하기
      </Button>
      <h1>{loginStatus}</h1>
    </div>
  );
}
