import React from "react";
import { Router, Routes, Route } from "react-router-dom";


import Home from "../Home/Home.jsx";
import LoginPage from "../Auth/LoginPage.jsx";
import Layout from "../Layout/Layout.jsx";
import Data from "../Histogram/Date/Data.jsx";
import HistogramBlock from "../Histogram/HistogramResultat/HistogramBlock.jsx";







function App() {
  return (
    // Pass the history prop to the Router component

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/data" element={<Data />} />
          <Route path="/histogram" element={<HistogramBlock/>} />
        </Route>
      </Routes>

  );
}

export default App;