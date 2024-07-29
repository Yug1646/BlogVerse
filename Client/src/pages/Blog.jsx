
import React, { useState,useEffect} from 'react';
import axios from 'axios'
const Blog=()=> {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category,setCategory]= useState('');
  const [list, setList] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get("http://localhost:5000/get");
  //     console.log(res.data);
  //     setList(res.data);
  //   }
  //   getData();
  // }, []);

  
  const AddBlog = async () => {
    try {
      await axios.post('http://localhost:5000/create', {
        title: title,
        description: description,
        category: category
      });
      alert('Blog Created Successfully');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 p-2 rounded-full">
              <span className="text-white font-bold text-xl">BlogVerse</span>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">New Post</h1>
          </div>
        </div>
      </header> */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow sm:rounded-lg p-6 space-y-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Title"
                id='title-input'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Category"
                id='description-input'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <textarea
                rows="10"
                placeholder="Write your post..."
                id='category-input'
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-end">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" onClick={AddBlog}>
            Publish
          </button>
        </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
