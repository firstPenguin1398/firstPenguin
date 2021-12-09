import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const imgUrl = "/images/fpLogo.png";

  return (
    <div className="nav">
      <div className="loginPage">
        <NavLink to="/register" className="loginMenu">
          <p>회원가입</p>
        </NavLink>
        <NavLink to="/login" className="loginMenu">
          <p>로그인</p>
        </NavLink>
      </div>
      <div className="menuAll">
        <NavLink to="/">
          <img src={imgUrl} alt="logo" className="fpImg" />
        </NavLink>
        <NavLink to="/WeeklyReport" className="menuName">
          <p>WeeklyReport</p>
        </NavLink>
        <NavLink to="/Freeboard" className="menuName">
          <p>Freeboard</p>
        </NavLink>
        <NavLink to="/Attendence" className="menuName">
          <p>Attendence</p>
        </NavLink>
      </div>
    </div>
  );
}
