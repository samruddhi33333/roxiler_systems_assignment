import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StoreDetailsPage from './pages/StoreDetailsPage';
import SubmitRatingPage from './pages/SubmitRatingPage';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store/:id" element={<StoreDetailsPage />} />
      <Route path="/submit-rating" element={<SubmitRatingPage />} />
    </Routes>
  </Router>
);

export default App;