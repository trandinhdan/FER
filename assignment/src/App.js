// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shopping from "./pages/shopping";
import Contact from "./pages/contact";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/shop" element={<Shopping />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
