import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const imgUrl = "/images/fpLogo.png";
  return (
    <div className="nav">
      <div className="menuAll">
        <NavLink to="/">
          <img src={imgUrl} alt="logo" className="fpImg" />
        </NavLink>
        <NavLink to="/WeeklyReport" className="menuName" onClick>
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
