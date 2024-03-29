import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter basename="/image-search">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
