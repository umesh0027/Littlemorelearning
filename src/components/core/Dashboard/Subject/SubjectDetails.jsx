// // components/SubjectDetails.js
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function SubjectDetails({ subject }) {
//   const navigate = useNavigate();

// //   const handleDelete = () => {
// //     const confirmation = window.confirm("Are you sure you want to delete this subject?");
// //     if (confirmation) {
// //       axios.delete(`/api/subject/${subject._id}`)
// //         .then((response) => {
// //           if (response.data.success) {
// //             navigate("/subjects"); // Redirect to the subjects list
// //           }
// //         })
// //         .catch((error) => console.error("Error deleting subject:", error));
// //     }
// //   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold">{subject.title}</h2>
//       <p>{subject.description}</p>
//       <a href={subject.notesUrl} className="text-blue-500">{subject.notesUrl}</a>
//       {/* <div className="mt-4 flex justify-between">
//         <button
//           onClick={() => navigate(`/update-subject/${subject._id}`)}
//           className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
//         >
//           Edit
//         </button>
//         <button
//           onClick={handleDelete}
//           className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
//         >
//           Delete
//         </button>
//       </div> */}
//     </div>
//   );
// }

// export default SubjectDetails;
