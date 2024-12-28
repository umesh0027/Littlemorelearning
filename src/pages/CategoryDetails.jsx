




import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function CategoryDetails() {
  const { categoryId } = useParams(); 
  const [category, setCategory] = useState(null); 
  const [subjects, setSubjects] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // Fetch category details and subjects based on category ID
  useEffect(() => {
    // Fetch category data
    axios
      .get(`${BASE_URL}/notes/category/${categoryId}`) 
      .then((response) => {
        setCategory(response.data.category); 
      })
      .catch((error) => {
        setError("Failed to load category");
        console.error("Error fetching category:", error);
      });

    // Fetch subjects for the category
    axios
      .get(`${BASE_URL}/notes/category/${categoryId}/subjects`) 
      .then((response) => {
        setSubjects(response.data.subjects); 
        setLoading(false); 
      })
      .catch((error) => {
        setError("Failed to load subjects");
        setLoading(false);
        console.error("Error fetching subjects:", error);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-4 text-xl text-gray-500">
        Loading...
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
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar />

      <div className="container mx-auto p-4">
       
        {category && (
          <h1 className="lg:text-4xl text-2xl  font-bold mb-6 lg:text-center md:text-left text-[#3b3092] text-center">
           Explore Notes for {category.name} 
          </h1>
        )}

        {subjects.length === 0 ? (
          <p className="text-center text-gray-600 font-bold text-2xl mt-10">" Sorry, currently there is no course for this. It will be provided to you soon..."</p>
        ) : (
          <div className=" p-6 mb-6">
            {subjects.map((subject) => (
              <div
                key={subject._id}
                className="bg-white p-6 mt-6  rounded-lg shadow-lg hover:shadow-xl "
              >
                <h2 className="text-xl font-semibold text-[#3b3092]"> {subject.title}</h2>
                <p className="text-sm text-[#3b3092] mt-2">
                  <span className="font-bold "> </span>{subject.description}
                </p>
                <div className="mt-4">
                  <a
                    href={subject.notesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
                  >
                    Download Notes
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CategoryDetails;



