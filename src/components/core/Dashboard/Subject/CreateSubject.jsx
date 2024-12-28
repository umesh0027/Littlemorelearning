// components/CreateSubject.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
function CreateSubject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notesUrl, setNotesUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    // Fetch categories for the select input
    axios.get(`${BASE_URL}/notes/categories`)
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectData = {
      title,
      description,
      notesUrl,
      category: selectedCategory,
    };

    axios.post(`${BASE_URL}/notes/subject`, subjectData)
      .then((response) => {
        if (response.data.success) {
          navigate("/subjects"); 
        }
      })
      .catch((error) => {
        console.error("Error creating subject:", error);
      });
  };

  return (
   

   <>
    <div className="flex  ">
    <Sidebar />
    <div className="flex-1 ">
   <Topbar/>
   
    
    <div className="min-h-screen p-5 bg-[#f2daed]">
   <div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold mb-4  md:text-left text-[#3b3092] text-center">Create Subject</h1>
  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg  mx-auto ">
    <div className="mb-4">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="notesUrl" className="block text-sm font-medium text-gray-700">Notes URL</label>
      <input
        type="url"
        id="notesUrl"
        value={notesUrl}
        onChange={(e) => setNotesUrl(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
        required
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>{category.name}</option>
        ))}
      </select>
    </div>

    <button
      type="submit"
      className="mt-6 rounded-md bg-[#F59E0B] py-3 px-6 font-medium text-white hover:bg-[#D97706]"
    >
      Create Subject
    </button>
  </form>
</div>
</div>
</div>
</div>


   
   </>

  );
}

export default CreateSubject;

