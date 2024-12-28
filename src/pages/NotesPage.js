import React from "react";

import Navbar from "./Navbar"; 
import CategoryList from "../components/core/Dashboard/Notes/CategoryList";
import Footer from "./Footer";


const NotesPage = () => {
  return (
    <>
     
    <div className="bg-[#f2daed] min-h-screen">
    <Navbar />
  
      <header className="text-center py-10">
        <h1 className="text-[#3b3092] lg:text-4xl text-2xl font-semibold">
          Explore the wide range of notes we have for you
        </h1>
      </header>
      <CategoryList/>
    </div>

    <Footer/>
    
    </>
  );
};

export default NotesPage;
