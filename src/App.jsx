import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Friends from './components/Friends';
import FriendDetail from './components/FriendDetail';
import ScrollToTop from './components/ScrollToTop';
import IndradhanuGallery from './pages/IndradhanuGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Celebration from './pages/Celebration';
import Birthday from './pages/Birthday';
import Trekking from './pages/Tracking';
import Temple from './pages/Temple';
import Special from './pages/Special';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />


        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/special" element={<Special />} />
          <Route path="/celebration" element={<Celebration />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/friends/:slug" element={<FriendDetail />} />
          <Route path="/memories/:eventId" element={<IndradhanuGallery />} />

        <Route path="/" element={<Celebration />} />
        <Route path="/celebration/birthday" element={<Birthday />} />
        <Route path="/celebration/trekking" element={<Trekking />} />
        <Route path="/celebration/temple" element={<Temple />} />
         
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
