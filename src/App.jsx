import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Homepage";
import PagenotFound from "./pages/PagenotFound";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<PagenotFound />} /> {/* Catch-all route */}
      </Route>
    </Routes>
  );
};

export default App;
