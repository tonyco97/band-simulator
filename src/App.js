// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GuitarSimulator from "./components/GuitarSimulator";
import PianoSimulator from "./components/PianoSimulator";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guitar" element={<GuitarSimulator />} />
        <Route path="/piano" element={<PianoSimulator />} />
      </Routes>
    </Router>
  );
}

export default App;