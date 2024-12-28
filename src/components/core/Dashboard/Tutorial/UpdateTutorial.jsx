

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
function UpdateTutorial() {
  const { tutorialId } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [TutorialUrl, setTutorialUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    // Fetch Tutorial details by ID
    axios.get(`${BASE_URL}/tutorial/tutorial/${tutorialId}`)
      .then((response) => {
        const { tutorial } = response.data;
        setTutorial(tutorial);
        setTitle(tutorial.title);
        setDescription(tutorial.description);
        setTutorialUrl(tutorial.TutorialUrl);
        setSelectedCategory(tutorial.category._id);
      })
      .catch((error) => console.error("Error fetching tutorial:", error));

    // Fetch categories
    axios.get(`${BASE_URL}/tutorial/categories`)
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.error("Error fetching categories:", error));
  }, [tutorialId]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTutorialData = {
      title,
      description,
      TutorialUrl,
      category: selectedCategory,
    };

    axios.put(`${BASE_URL}/tutorial/tutorial/${tutorialId}`, updatedTutorialData)
      .then((response) => {
        if (response.data.success) {
          navigate("/playlists"); 
        }
      })
      .catch((error) => console.error("Error updating Tutorial:", error));
  };

  const handleCancel = () => {
    navigate("/playlists"); 
  };

  if (!tutorial) return <div>Loading...</div>;

  return (
    <div className="flex  ">
    <Sidebar />
    <div className="flex-1 ">
   <Topbar/>
   
    
    <div className="min-h-screen  p-5 bg-[#f2daed]">
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-[#3b3092]">Update Tutorial</h1>
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="notesUrl" className="block text-sm font-medium text-gray-700">Notes URL</label>
          <input
            type="url"
            id="TutorialUrl"
            value={TutorialUrl}
            onChange={(e) => setTutorialUrl(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex justify-between gap-4 ">
          <button
            type="submit"
            className=" rounded-md bg-[#F59E0B] py-3  px-6 font-medium text-white hover:bg-[#D97706]"
          >
            Update Tutorial
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    
    

  );
}

export default UpdateTutorial;


