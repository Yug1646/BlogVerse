import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Home from './pages/Home';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />

        {/* Add other routes as needed */}
      </Routes>
    </>
  );
};

export default App;
