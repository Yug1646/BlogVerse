import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { handleError, handleSuccess } from "../../utils";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

const Register = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!signupInfo.name || !signupInfo.email || !signupInfo.password) {
      return handleError("All Fields required");
    }
    try {
      const url = "http://localhost:5000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signupInfo.name,
          email: signupInfo.email,
          password: signupInfo.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return handleError(errorData.message || "An error occurred");
      }

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError("An error occurred: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9E8D9] flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSignup}>
          <h1 className="text-3xl font-bold text-center mb-6 text-[#527853]">
            Sign Up
          </h1>
          <div className="space-y-4">
            <div className="relative">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                value={signupInfo.name}
                placeholder="Enter Name"
                onChange={(e) =>
                  setSignupInfo({ ...signupInfo, name: e.target.value })
                }
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:ring-[#527853]"
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="email"
                value={signupInfo.email}
                placeholder="Enter Email"
                onChange={(e) =>
                  setSignupInfo({ ...signupInfo, email: e.target.value })
                }
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:ring-[#527853]"
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="password"
                value={signupInfo.password}
                placeholder="Enter Password"
                onChange={(e) =>
                  setSignupInfo({ ...signupInfo, password: e.target.value })
                }
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:ring-[#527853]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#EE7214] text-white py-2 rounded-lg hover:bg-[#d65a2b] transition duration-200"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="text-[#EE7214] hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
