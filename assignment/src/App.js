// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shopping from './pages/shopping';
import ShopDetail from './pages/shopdetail';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/shop" element={<Shopping />} />
          <Route path="/shopdetail" element={<ShopDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
