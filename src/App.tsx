<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 6bd9e27b47e3b01ff1d3c30f2f032fb4e4a4c46d
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import './App.css';
<<<<<<< HEAD
export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <Router>
=======

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <Router>
>>>>>>> 6bd9e27b47e3b01ff1d3c30f2f032fb4e4a4c46d
      <div className="flex flex-col min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
<<<<<<< HEAD
    </Router>;
=======
    </Router>
  );
>>>>>>> 6bd9e27b47e3b01ff1d3c30f2f032fb4e4a4c46d
}