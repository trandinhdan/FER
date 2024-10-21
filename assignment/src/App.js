/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from "./pages/Shop";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]

)

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Shop/>
    </div>
  );
}

export default App;
