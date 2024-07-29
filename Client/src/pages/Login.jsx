import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleSubmit =async () => {
    // const response=await fetch("http://localhost:5000/auth/login",{
    //   method:"POST",
    //   headers:{"Content-Type":"application/json",},
    //   body:JSON.stringify({
    //     email:loginInfo.email,
    //     password:loginInfo.password,
    //   })
    // });
    const url = "http://localhost:5000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email:loginInfo.email,
          password:loginInfo.password})
      });
    console.log(response);
    const jsun=await response.json
    if(jsun)
    {
      localStorage.setItem("token",jsun.token);
      alert(`Login Successfull!`)
    }
    else
    {
      alert(`Please fill out all the fields`)
    }

    console.log(response.json); // For demonstration purposes
  }
    // Handle form submission logic here
 
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
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
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
