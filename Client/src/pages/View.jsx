import React, { useState, useEffect } from "react";
import axios from "axios";

const View = () => {
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/view/data");
      console.log(res.data);
      setList(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#F9E8D9] min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#527853] mb-8">
          Blog Posts
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
              <p className="text-[#EE7214] font-semibold">{value.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View;
