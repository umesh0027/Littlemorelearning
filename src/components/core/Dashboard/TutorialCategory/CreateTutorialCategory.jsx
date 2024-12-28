import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import {toast} from "react-hot-toast";
const CreateTutorialCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); 
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // Fetch categories from the backend API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tutorial/categories`);
        setCategories(response.data.categories);
      } catch (err) {
       
        toast.error("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, [success]);

  // Handle form submission for creating a new category
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName || !categoryDescription) {
      setError("Both fields are required.");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/tutorial/category`, {
        name: categoryName,
        description: categoryDescription,
      });
     
      toast.success("Category created successfully!");
     
      setCategoryName("");
      setCategoryDescription("");
    } catch (err) {
    
      toast.error("Failed to create category.");
    }
  };

  return (
    <div className="flex  ">
    <Sidebar />
    <div className="flex-1 ">
   <Topbar/>
   
    
    <div className="min-h-screen  p-5 bg-[#f2daed]">
        
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#3b3092]">Admin Create Category For Tutorial</h1>

       
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-md mx-auto"
        >
          <h2 className="text-xl font-semibold mb-4">Create Tutorial Category</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-md mt-2"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              className="w-full p-3 border rounded-md mt-2"
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
              placeholder="Enter category description"
            />
          </div>
          <button
            type="submit"
            className="mt-6 rounded-md bg-[#F59E0B] py-3 px-6 font-medium text-white hover:bg-[#D97706] "
          >
            Create Category
          </button>
        </form>


<div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
  <h2 className="text-xl sm:text-2xl font-semibold mb-4">Categories</h2>
  <ul>
    {categories.map((category) => (
      <li
        key={category._id}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b py-3"
      >
        <div className="mb-3 sm:mb-0">
          <strong className="text-lg sm:text-xl">{category.name}</strong>
          <p className="text-gray-500 text-sm sm:text-base">{category.description}</p>
        </div>
        <div className="flex space-x-3 mt-auto">
          <button
            onClick={() => navigate(`/edit-tutorialcategory/${category._id}`)}
            className="w-full sm:w-auto py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Edit
          </button>
          <button
            onClick={async () => {
              try {
                await axios.delete(`${BASE_URL}/tutorial/category/${category._id}`);
                toast.success("Category deleted successfully!");
              } catch (err) {
                toast.error("Failed to delete category.");
              }
            }}
            className="w-full sm:w-auto py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

      </div>
    </div>
    
    </div>

    </div>
  );
};

export default CreateTutorialCategory;


