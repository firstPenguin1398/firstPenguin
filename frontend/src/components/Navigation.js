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
        <NavLink to="/Yuna" className="menuName" onClick>
          <p>yuna</p>
        </NavLink>
        <NavLink to="/Jongho" className="menuName">
          <p>jongho</p>
        </NavLink>
        <NavLink to="/Eunseo" className="menuName">
          <p>eunseo</p>
        </NavLink>
      </div>
    </div>
  );
}
