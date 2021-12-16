import { useState } from "react";
import Axios from "axios";
import "./RegisterLogin.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [showNameError, setShowNameError] = useState(false);
  const [showPwError, setShowPwError] = useState(false);

  const register = () => {
    console.log(showNameError, showPwError);
    if (showNameError === false && showPwError === false) {
      Axios.post("http://localhost:8080/api/register", {
        username: usernameReg,
        password: passwordReg,
      }).then(response => {
        alert("축하합니다. 회원가입에 성공하셨습니다!");
        console.log(response);
      });
    } else {
      alert("조건에 맞게 회원가입을 진행해주세요!");
    }
  };

  return (
    <div className="title">
      <h1>회원가입</h1>
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
              setUsernameReg(e.target.value);
              if (e.target.value.length < 4) {
                setShowNameError(true);
              } else {
                setShowNameError(false);
              }
              console.log(e.target.value);
            }}
            error={showNameError}
            helperText="4자 이상이어야 합니다."
          />
          <div className="emptyBox"></div>
          <TextField
            sx={{ width: 400 }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={e => {
              setPasswordReg(e.target.value);
              if (e.target.value.length < 6) {
                setShowPwError(true);
              } else {
                setShowPwError(false);
              }
              console.log(e.target.value);
            }}
            error={showPwError}
            helperText="6자 이상이어야 합니다."
          />
        </Box>
      </div>
      <Button
        variant="contained"
        onClick={register}
        size="large"
        sx={{ mt: 6 }}
      >
        회원가입하기
      </Button>
    </div>
  );
}
