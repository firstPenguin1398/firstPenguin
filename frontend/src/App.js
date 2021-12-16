import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home/HomePage";
import Attendence from "./components/Attendence/Attendence";
import Freeboard from "./components/Freeboard/Freeboard";
import WeeklyReport from "./components/WeeklyReport/WeeklyReport";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/WeeklyReport" element={<WeeklyReport />} />
          <Route path="/Freeboard" element={<Freeboard />} />
          <Route path="/Attendence" element={<Attendence />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
