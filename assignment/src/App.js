// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shopping from './pages/shopping';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/shop" element={<Shopping />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
