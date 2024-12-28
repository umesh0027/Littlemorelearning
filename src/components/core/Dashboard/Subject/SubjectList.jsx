



import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";

function SubjectList() {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // Fetch subjects from backend
  useEffect(() => {
    axios
      .get(`${BASE_URL}/notes/subjects`)
      .then((response) => {
        setSubjects(response.data.subjects); 
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });
  }, []);

  const handleDelete = (subjectId) => {
    const confirmation = window.confirm("Are you sure you want to delete this subject?");
    if (confirmation) {
      axios
        .delete(`${BASE_URL}/notes/subject/${subjectId}`)
        .then((response) => {
          if (response.data.success) {
            setSubjects(subjects.filter(subject => subject._id !== subjectId)); 
          }
        })
        .catch((error) => {
          console.error("Error deleting subject:", error);
        });
    }
  };

  return (
    <>
     


<div className="flex">
  <Sidebar />
  <div className="flex-1">
    <Topbar />
    <div className="min-h-screen p-5 bg-[#f2daed]">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-[#3b3092]">Subjects List</h1>

       
        {subjects.length === 0 ? (
          <p className="text-center text-gray-600">No subjects available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subjects.map((subject) => (
              <div
                key={subject._id}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
              >
            
                <h3 className="text-sm font-bold text-gray-500">Notes Category: {subject.category.name}</h3>
                <h2 className="text-xl font-semibold text-gray-800">{subject.title}</h2>
                <p className="text-sm  sm:text-base text-gray-600">
                  <span className="font-semibold ">Description:</span> {subject.description}
                </p>
                <a
                  href={`/subject/${subject._id}`}
                  className="text-blue-500 mt-2 inline-block hover:underline"
                >
                  View Details
                </a>

               
                <div className="mt-auto flex flex-col sm:flex-row justify-between gap-4">
                  <button
                    onClick={() => navigate(`/subject/${subject._id}`)}
                    className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(subject._id)}
                    className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</div>

    </>
  );
}


export default SubjectList;



