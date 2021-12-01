import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home/HomePage";
import Eunseo from "./components/Eunseo";
import Jongho from "./components/Jongho";
import Yuna from "./components/WeeklyReport/Yuna";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Yuna" element={<Yuna />} />
          <Route path="/Jongho" element={<Jongho />} />
          <Route path="/Eunseo" element={<Eunseo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
