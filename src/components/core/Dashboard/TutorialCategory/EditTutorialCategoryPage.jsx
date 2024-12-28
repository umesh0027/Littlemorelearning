


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
const EditTutorialCategory = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const navigate = useNavigate(); 
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // Fetch category data by ID when the component mounts
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tutorial/category/${id}`);
        setCategoryName(response.data.category.name);
        setCategoryDescription(response.data.category.description);
      } catch (err) {
        
        toast.error("Failed to fetch category data."); 
      }
    };
    fetchCategory();
  }, [id]);

  // Handle form submission for updating the category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send PUT request to update category
      await axios.put(`${BASE_URL}/tutorial/category/${id}`, {
        name: categoryName,
        description: categoryDescription,
      });

     

      toast.success("Category updated successfully!"); 
      setTimeout(() => navigate(-1), 1000); // Redirect to the previous page after 1 seconds
    } catch (err) {
    
      toast.error("Failed to update category.");
    }
  };

  // Handle the Cancel button click to navigate back
  const handleCancel = () => {
    navigate(-1); // Redirect to  previous page
  };

  return (
    <div className="min-h-screen  p-5  bg-[#f2daed]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#3b3092]">Edit Category</h1>

     
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-md mx-auto"
        >
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
          <div className="flex justify-between">
            <button
              type="submit"
              className=" rounded-md bg-[#F59E0B] p-2 font-medium text-white hover:bg-[#D97706] "
            >
              Update Category
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="p-2 bg-gray-500 text-white  rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTutorialCategory;


