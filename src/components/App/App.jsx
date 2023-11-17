import React from "react";
import { Router, Routes, Route } from "react-router-dom";


import Home from "../Home/Home.jsx";
import LoginPage from "../Auth/LoginPage.jsx";
import Layout from "../Layout/Layout.jsx";
import DataHistogram from "../Histogram/Date/DataHistogram.jsx";
import HistogramBlock from "../Histogram/HistogramResultat/HistogramBlock.jsx";
import HistogramPage from "../Histogram/HistogramPage";







function App() {
  return (
    // Pass the history prop to the Router component

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/data" element={<DataHistogram />} />
          <Route path="/histogram" element={<HistogramPage/>} />
        </Route>
      </Routes>

  );
}

export default App;