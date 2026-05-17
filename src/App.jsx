import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SafetyReport from "./pages/SafetyReport";
import "./App.css";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Landing page / home */}
        <Route path="/" element={<Home />} />

        {/* Safety report page - locationId is passed via URL param */}
        <Route path="/report/:locationId" element={<SafetyReport />} />
      </Routes>
    </Router>
  );
}
