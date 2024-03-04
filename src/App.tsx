import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Writing from "./components/Writing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing/:fileName" element={<Writing/>} />
        </Routes>
      </BrowserRouter>
      <div id="content">
        <div className="section">
          <div className="footer-section">
              <p className="left-text" style={{ fontSize: "x-small" }}>Nils Fahrni © {(new Date().getFullYear())}</p>
              <p className="right-text" style={{ fontSize: "small" }}>🌿</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;