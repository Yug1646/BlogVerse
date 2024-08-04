import React, { useState, useEffect } from "react";
import axios from "axios";
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyBlog = () => {
  const userId = localStorage.getItem("id"); // Get user ID from local storage
  const [list, setList] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [editId, setEditId] = useState(null); // State to track which blog is being edited

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
      handleSuccess("Blog Deleted!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      handleError("Failed to delete blog");
      console.log(error);
    }
  };

  const UpdateBlog = async (id) => {
    try {
      await axios.put(`http://localhost:5000/update/${id}`, {
        newTitle: newTitle,
        newDescription: newDescription,
        newCategory: newCategory,
      });
      handleSuccess("Blog Updated Successfully");
      window.location.reload();
    } catch (error) {
      handleError("Failed to update blog");
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
          {list.map((value) =>
            userId == value.user ? (
              <div
                className="bg-[#F7B787] shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
                key={value._id}
              >
                <h2 className="text-2xl font-bold text-[#527853] mb-2">
                  {value.title}
                </h2>
                <p className="text-[#EE7214] font-semibold mb-4">
                  {value.category}
                </p>
                <p className="text-[#5A72A0] mb-4">{value.description}</p>

                <div className="flex flex-col space-y-2">
                  {editId === value._id ? (
                    <>
                      <input
                        type="text"
                        placeholder="Replace Title"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setNewTitle(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Replace Description"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setNewDescription(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Replace Category"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setNewCategory(e.target.value)}
                      />
                    </>
                  ) : null}
                  <div className="flex space-x-4 mt-4">
                    <button
                      className="bg-[#EE7214] text-white py-2 px-4 rounded hover:bg-[#d65a2b] transition duration-300"
                      onClick={() => DeleteBlog(value._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-[#527853] text-white py-2 px-4 rounded hover:bg-[#4a6a4b] transition duration-300"
                      onClick={() => {
                        if (editId === value._id) {
                          UpdateBlog(value._id);
                          setEditId(null);
                        } else {
                          setEditId(value._id);
                        }
                      }}
                    >
                      {editId === value._id ? "Save" : "Update"}
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyBlog;
