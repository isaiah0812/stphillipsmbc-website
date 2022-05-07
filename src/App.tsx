import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Events from './pages/events';
import Offering from './pages/offering';
import Photos from './pages/photos';
import Staff from './pages/staff';

function App() {
  return (
    <Container style={{ minHeight: '100vh', padding: 0 }} fluid>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/offering" element={<Offering />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Container>
  );
}

export default App;
