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
    </div>
  );
}

export default App;