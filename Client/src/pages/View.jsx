import React, { useState, useEffect } from "react";
import axios from "axios";

const View = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState({}); // Object to store user data

  // Fetch a single user
  const getUser = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/auth/getuser/${id}`);
      return { id, data: res.data }; // Return user ID and data
    } catch (error) {
      console.error("Error fetching user data:", error);
      return { id, data: null }; // Return null if there is an error
    }
  };

  // Fetch all users
  const getAllUsers = async (userIds) => {
    const userPromises = userIds.map((id) => getUser(id));
    const userResults = await Promise.all(userPromises);
    const userMap = userResults.reduce((acc, { id, data }) => {
      if (data) acc[id] = data;
      return acc;
    }, {});
    setUsers(userMap);
  };

  // Fetch blog data and user data
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/view/data");
      const blogPosts = res.data;
      setList(blogPosts);

      // Fetch user data for all users in the blog posts
      const userIds = [...new Set(blogPosts.map((post) => post.user))]; // Unique user IDs
      await getAllUsers(userIds);
    } catch (error) {
      console.error("Error fetching blog data:", error);
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
              <p className="text-[#EE7214] font-semibold">{value.category}</p>

              <p className="text-[#5A72A0] mb-4">{value.description}</p>
              {users[value.user] ? (
                <p className="text-[#ffffff] mb-4">Author Name : {users[value.user].data.name}</p>
              ) : (
                <p className="text-[#5A72A0] mb-4">Loading user...</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View;
