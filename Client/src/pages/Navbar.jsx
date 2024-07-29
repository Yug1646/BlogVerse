import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">BlogVerse</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
          </li>
          {localStorage.getItem("token") ? <button onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}>Logout</button> : <><Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="text-white hover:text-gray-300">Signup</Link></>
            }
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
