import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovingCursor from "./components/MovingCursor";
const App = () => {

  return (
    <>
      <BrowserRouter>
        {/* moving cursor  */}
        <MovingCursor/>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
