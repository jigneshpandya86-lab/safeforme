import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SafetyReport from './pages/SafetyReport';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report/:locationId" element={<SafetyReport />} />
      </Routes>
    </Router>
  );
}