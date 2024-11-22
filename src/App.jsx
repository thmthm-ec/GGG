import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Materials from './pages/Materials';
import Quote from './pages/Quote';
import Gallery from './pages/Gallery';
import Catalogs from './pages/Catalogs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/catalogs" element={<Catalogs />} />
        </Routes>
      </div>
    </Router>
  );
}