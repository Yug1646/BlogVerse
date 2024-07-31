import React, { useState } from "react";
import axios from "axios";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const AddBlog = async () => {
    try {
      await axios.post("http://localhost:5000/create", {
        title: title,
        description: description,
        category: category,
      });
      alert("Blog Created Successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9E8D9] flex flex-col">
      <header className="py-10  shadow">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#527853]">
            Create Your Blog
          </h1>
          <p className="text-lg text-[#5A72A0] mt-4">
            Share your thoughts and ideas with the world
          </p>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-[#F7B787] shadow sm:rounded-lg p-6 space-y-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Title"
                id="title-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#527853]"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Category"
                id="category-input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#527853]"
              />
            </div>
            <div>
              <textarea
                rows="10"
                placeholder="Write your post..."
                id="description-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#527853]"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[#EE7214] text-white px-4 py-2 rounded hover:bg-[#C95E12] transition duration-200"
                onClick={AddBlog}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Blog;
