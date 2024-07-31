import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import View from "./pages/View";
import Myblog from "./pages/Myblog";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/view" element={<View />} />
        <Route path="/" element={<Home />} />
        <Route path="/myblog" element={<Myblog />} />
      </Routes>
      <footer className="py-6 bg-[#F7B787]">
        <div className="max-w-4xl mx-auto text-center text-[#5A72A0]">
          © 2024 Your Blog Platform. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
