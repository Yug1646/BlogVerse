import React, { useState, useEffect } from "react";
import axios from "axios";

const MyBlog = () => {
  const userId = localStorage.getItem("id"); // Get user ID from local storage
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/view/data");
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#F9E8D9] min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#527853] mb-8">
          My Blog Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((value) => (
            <div
              className="bg-[#F7B787] shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              key={value._id}
            >
              <h2 className="text-2xl font-bold text-[#527853] mb-2">
                {value.title}
              </h2>
              <p className="text-[#5A72A0] mb-4">{value.description}</p>
              <p className="text-[#EE7214] font-semibold mb-4">{value.category}</p>
              <div className="flex space-x-4">
                <button className="bg-[#EE7214] text-white py-2 px-4 rounded hover:bg-[#d65a2b] transition duration-300">
                  Delete
                </button>
                <button className="bg-[#527853] text-white py-2 px-4 rounded hover:bg-[#4a6a4b] transition duration-300">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
