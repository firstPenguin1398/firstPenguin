import { NavLink, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Eunseo from "./Eunseo";
import Jongho from "./Jongho";
import Yuna from "./Yuna";

export default function Navigation() {
  return (
    <div>
      <h1>
        <NavLink to="/">홈</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/Yuna">yuna</NavLink>
        </li>
        <li>
          <NavLink to="/Jongho">jongho</NavLink>
        </li>
        <li>
          <NavLink to="/Eunseo">eunseo</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Yuna" element={<Yuna />} />
        <Route path="/Jongho" element={<Jongho />} />
        <Route path="/Eunseo" element={<Eunseo />} />
      </Routes>
    </div>
  );
}
