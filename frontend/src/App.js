import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}
