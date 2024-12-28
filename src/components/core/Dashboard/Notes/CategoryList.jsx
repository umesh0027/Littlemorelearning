

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const BASE_URL = process.env.REACT_APP_BASE_URL;
  // Fetch categories from the backend
  useEffect(() => {
    axios
      // .get(`${BASE_URL}/notes/categories`) 
       .get("https://littlemorelearning-ml2h.onrender.com/api/v1/notes/categories")
      .then((response) => {
        setCategories(response.data.categories); 
        setLoading(false); 
      })
      .catch((error) => {
        setError("Failed to load categories");
        setLoading(false); 
        console.error("Error fetching categories:", error);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-4 text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
   <>
    <div className="container mx-auto p-4">
   

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-16">
  {categories.map((category) => (
    <div
      key={category._id}
      className="bg-white p-6 text-center rounded-lg shadow-lg hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 flex flex-col justify-between"  // Added flex and justify-between
    >
      <div>
        <h2 className="text-2xl font-semibold text-[#3b3092]">{category.name}</h2>
        <p className="text-sm text-[#3b3092] mt-2">{category.description}</p>
      </div>

      <div className="mt-auto text-center ">  
        <button
          onClick={() => navigate(`/category/${category._id}`)} 
          className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
        >
          Explore
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
   
   </>
  );
}

export default CategoryList;




