import React from "react";

import Navbar from "./Navbar"; 
import TutorialList from "../components/core/Dashboard/TutorialCategory/TutorialList";
import Footer from "./Footer";


const TutorialsPage = () => {
  return (
    <>
      <div className="bg-[#f2daed] min-h-screen">
        <Navbar />

        <header className="text-center py-10">
          <h1 className="text-[#3b3092] lg:text-4xl text-2xl mx-4 font-semibold">
            Explore the wide range of Tutorials we have for you
          </h1>
        </header>
        <TutorialList />
      </div>
      <Footer/>
    </>
  );
};

export default TutorialsPage;
