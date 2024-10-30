import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Shopping from './pages/shopping';
import ShopDetail from './pages/shopdetail';
import Contact from "./pages/contact";

import Header from './component/header';
import Navbar from './component/navbar';
import Footer from './component/footer';

import Login from './pages/authentication/LoginPage';
import Register from './pages/authentication/RegisterPage';
import Home from './pages/homepage/Home';
import Checkout from './pages/shopping/checkout';
import Cart1 from './pages/cart/Cart1';
const App = () => {
  const token = localStorage.getItem("token");
  const userData = JSON.parse(token);

  return (
    <Router>
      <Header token={userData} />

      <Navbar userData={userData} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={token ? <Shopping /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shopdetail/:id" element={<ShopDetail />} />
          <Route path="/cart" element={<Cart1 />} />
          <Route path="/shop" element={<Shopping />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
