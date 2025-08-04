
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Preview from './Components/Preview';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import AdminDashboard from './Components/AdminDashboard';
import VolunteerDashboard from './Components/VolunteerDashboard';
import UserDashboard from './Components/UserDashboard';
import ProtectedRoute from './Components/ProtectedRoute';
export default function App() {
  return (
    <>
      <Navbar />
      
     <Hero />
     <Preview />
    <Features />
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected dashboards */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/volunteer-dashboard"
          element={
            <ProtectedRoute role="volunteer">
              <VolunteerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute role="public">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
</Router>
      <Contact />
      </>
    
  );
}
