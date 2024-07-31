import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#527853] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#F9E8D9] text-2xl font-bold">BlogVerse</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-[#F9E8D9] text-lg font-semibold hover:text-[#EE7214]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/view"
              className="text-[#F9E8D9] text-lg font-semibold hover:text-[#EE7214]"
            >
              View
            </Link>
          </li>
          {localStorage.getItem("id") ? (
            <>
              <li>
                <Link
                  to="/myblog"
                  className="text-[#F9E8D9] text-lg font-semibold hover:text-[#EE7214]"
                >
                  MyBlog
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-[#F9E8D9] text-lg font-semibold hover:text-[#EE7214]"
                >
                  Blog
                </Link>
              </li>
              <button
                onClick={() => {
                  localStorage.removeItem("id");
                  window.location.href = "/login";
                }}
                className="text-[#F9E8D9] text-lg font-semibold hover:text-[#EE7214]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-[#F9E8D9] text-lg font-semibold hover:text-[#EE7214]"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-[#F9E8D9] text-lg font-semibold hover:text-[#EE7214]"
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
