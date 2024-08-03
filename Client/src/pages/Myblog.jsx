import React, { useState, useEffect } from "react";
import axios from "axios";

const MyBlog = () => {
  const userId = localStorage.getItem("id"); // Get user ID from local storage
  const [list, setList] = useState([]);
  const [editingId, setEditingId] = useState(null); // Track which blog is being edited
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");

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

  const DeleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      alert("Blog Deleted !");
      getData(); // Refresh the blog list after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateBlog = async (id) => {
    try {
      await axios.put(`http://localhost:5000/update/${id}`, {
        title: newTitle,
        description: newDescription,
        category: newCategory,
      });
      alert("Blog Updated Successfully");
      setEditingId(null); // Reset editing mode
      getData(); // Refresh the blog list after update
    } catch (error) {
      console.log(error);
    }
  };

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
              <p className="text-[#EE7214] font-semibold mb-4">
                {value.category}
              </p>
              <div className="space-y-4">
                {editingId === value._id ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="New Title"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="New Description"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="New Category"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <div className="flex space-x-4">
                      <button
                        className="bg-[#527853] text-white py-2 px-4 rounded hover:bg-[#4a6a4b] transition duration-300"
                        onClick={() => UpdateBlog(value._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-[#EE7214] text-white py-2 px-4 rounded hover:bg-[#d65a2b] transition duration-300"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-4">
                    <button
                      className="bg-[#EE7214] text-white py-2 px-4 rounded hover:bg-[#d65a2b] transition duration-300"
                      onClick={() => DeleteBlog(value._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-[#527853] text-white py-2 px-4 rounded hover:bg-[#4a6a4b] transition duration-300"
                      onClick={() => setEditingId(value._id)}
                    >
                      Update
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
