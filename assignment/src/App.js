import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Shopping from './pages/shopping';

import Header from './component/header';
import Navbar from './component/navbar';
import Footer from './component/footer';

import Login from './pages/authentication/LoginPage';
import Register from './pages/authentication/RegisterPage';
import Home from './pages/Home';

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <Router>
      <Header username={token} />
      
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={token ? <Shopping /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
