import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingNav from './components/FloatingNav'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Services from './pages/Services'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Messages from './pages/Messages'
import Bookings from './pages/Bookings'
import HelpCenter from './pages/HelpCenter'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingNav />
      </div>
    </Router>
  )
}