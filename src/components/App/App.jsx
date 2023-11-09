import React from "react";
import { Router, Routes, Route } from "react-router-dom";


import Home from "../Home/Home.jsx";
import LoginPage from "../Auth/LoginPage.jsx";
import Layout from "../Layout/Layout.jsx";




function App() {
  return (
    // Pass the history prop to the Router component

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>

  );
}

export default App;