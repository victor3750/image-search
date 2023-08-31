import { BrowserRoutern, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="image-search" element={<Homepage />}></Route>
          <Route path="image-search/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
