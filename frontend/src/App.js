import React, { Component } from "react";
import { Link } from "react-router-dom";
import FpImg from "./components/FpImg";
import MainPage from "./components/MainPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1>Home</h1>
          <ul>
            <li>
              <Link to="/Yuna">yuna</Link>
            </li>
            <li>
              <Link to="/Jongho">jongho</Link>
            </li>
            <li>
              <Link to="/Eunseo">eunseo</Link>
            </li>
          </ul>
        </nav>
        <FpImg />
        <MainPage />
      </div>
    );
  }
}
