




import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function TutorialDetails() {
  const { categoryId } = useParams(); 
  const [category, setCategory] = useState(null); 
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  useEffect(() => {
    
    axios
      .get(`${BASE_URL}/tutorial/category/${categoryId}`) 
      .then((response) => {
        setCategory(response.data.category); 
      })
      .catch((error) => {
        setError("Failed to load category");
        console.error("Error fetching category:", error);
      });

   
    axios
      .get(`${BASE_URL}/tutorial/category/${categoryId}/tutorials`) 
      .then((response) => {
        setTutorials(response.data.tutorials); 
        setLoading(false); 
      })
      .catch((error) => {
        setError("Failed to load Tutorials");
        setLoading(false);
        console.error("Error fetching Tutorials:", error);
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
      
    <div className="bg-[#f2daed] min-h-screen ">
    <Navbar />

      <div className="container mx-auto p-4">
       
        {category && (
          <h1 className="lg:text-4xl text-3xl font-bold mb-6 lg:text-center md:text-left text-[#3b3092] text-center">
           Explore Playlist for {category.name} 
          </h1>
        )}

        {tutorials.length === 0 ? (
          <p className="text-center text-gray-600 font-bold text-2xl mt-10">" Sorry, currently there is no Playlist for this. It will be provided to you soon..."</p>
        ) : (
          <div className=" p-6 mb-6">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial._id}
                className="bg-white p-6 mt-6 rounded-lg shadow-lg hover:shadow-xl "
              >
                <h2 className="text-xl font-semibold text-[#3b3092]"> {tutorial.title}</h2>
                <p className="text-sm text-[#3b3092] mt-2">
                  <span className="font-bold"> </span>{tutorial.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <a
                    href={tutorial.TutorialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
                  >
                    Watch Now
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

export default TutorialDetails;



