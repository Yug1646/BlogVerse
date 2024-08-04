import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [logged, setLogged] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/auth/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginInfo.email,
          password: loginInfo.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);        

        handleSuccess("Login Successfully!");
        setLogged(true);
        navigate("/"); 
        window.location.reload()
      } else {
        handleError("Login Failed. Please try again.");
      }
    } catch (error) {
      handleError("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogged(true); // Check if the user is already logged in
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9E8D9] flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center mb-6 text-[#527853]">Log In</h1>
          <div className="space-y-4">
            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="email"
                value={loginInfo.email}
                placeholder="Enter Email"
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, email: e.target.value })
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
                value={loginInfo.password}
                placeholder="Enter Password"
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:ring-[#527853]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#EE7214] text-white py-2 rounded-lg hover:bg-[#d65a2b] transition duration-200"
            >
              Log In
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/signup" className="text-[#EE7214] hover:underline">
              Signup
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
