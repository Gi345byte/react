import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ApodViewer from './components/ApodViewer';
import MarsGallery from './components/MarsGallery';
import EarthView from './components/EarthView';
import Favorites from './components/Favorites';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ApodViewer />} />
        <Route path="/mars" element={<MarsGallery />} />
        <Route path="/earth" element={<EarthView />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}