import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css"



// Importing Components
import HomePage from "./pages/HomePage"; // Path to HomePage component

import NotesPage from "./pages/NotesPage"; // Path to NotesPage component

import TutorialsPage from "./pages/TutorialsPage"; // Path to TutorialsPage component

import AboutUs from "./pages/AboutUs"; // Path to AboutUs component
import FAQ from "./pages/FAQ"; // Path to FAQ component
import ContactUs from "./pages/ContactUs"; // Path to ContactUs component


import Login from './pages/Login';   
import Signup from './pages/Signup'; 
import OpenRoute from './components/core/Auth/OpenRoute'; 
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/core/Auth/PrivateRoute';
import VerifyEmail from './pages/VerifyEmail';
import UpdatePassword from './pages/UpdatePassword';
import MyProfile from "./components/core/Dashboard/MyProfile"

import CreateNotes from './components/core/Dashboard/Notes/CreateNotes';
import EditCategory from './components/core/Dashboard/Notes/EditCategoryPage';
import CategoryDetails from './pages/CategoryDetails';
import CategoryList from './components/core/Dashboard/Notes/CategoryList';
import CreateSubject from './components/core/Dashboard/Subject/CreateSubject';
import SubjectList from './components/core/Dashboard/Subject/SubjectList';
import UpdateSubject from './components/core/Dashboard/Subject/UpdateSubject';
import SubjectDetails from './components/core/Dashboard/Subject/SubjectDetails';
import CreateTutorialCategory from './components/core/Dashboard/TutorialCategory/CreateTutorialCategory';
import EditTutorialCategory from './components/core/Dashboard/TutorialCategory/EditTutorialCategoryPage';
import CategoryTutorialList from './components/core/Dashboard/TutorialCategory/TutorialList';
import CreateTutorial from './components/core/Dashboard/Tutorial/CreateTutorial';
import TutorialList from './components/core/Dashboard/Tutorial/TutorialList';
import UpdateTutorial from './components/core/Dashboard/Tutorial/UpdateTutorial';
import TutorialDetails from './pages/TutorialDetails';

const App = () => {
  const [token] = useState(localStorage.getItem("token"));

  return (
   
       <>
      
        <Routes>
          
          <Route path="/" element={<HomePage />} />
         
          <Route path="/notes" element={<NotesPage />} />
        
         
        
        
        
          <Route path="/tutorials" element={<TutorialsPage />} />
          
          <Route path="/about" element={<AboutUs />} />
         
          <Route path="/faq" element={<FAQ />} /> {/* FAQ Page Route */}
          <Route path="/contact-us" element={<ContactUs />} />


          <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
         <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
           <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

<Route path="/category/:categoryId" element={<CategoryDetails />} />
<Route path="/categories" element={<CategoryList />} /> 
      
          {/* private Route Only for  Admin */}
          <Route path="dashboard/my-profile" element={ <PrivateRoute>
              <MyProfile />
            </PrivateRoute>} />
          <Route path="dashboard/notes" element={<PrivateRoute><CreateNotes /></PrivateRoute>} />
         
          <Route path="/edit-category/:id" element={<PrivateRoute><EditCategory/></PrivateRoute>} />


          <Route path="/dashboard/create-subject" element={<PrivateRoute><CreateSubject /></PrivateRoute>} />
          <Route path="/subjects" element={<PrivateRoute><SubjectList/></PrivateRoute> } />
          <Route path="/subject/:subjectId" element={ <PrivateRoute><UpdateSubject /></PrivateRoute>} />
          {/* <Route path="/subjects/:subjectId" element={<SubjectDetails />} /> */}



          <Route path="/tutorialcategories" element={<CategoryTutorialList/>} /> 
          <Route path="/tutorialcategory/:categoryId" element={<TutorialDetails/>} />
        
        
          {/* for tutorial */}

          <Route path="dashboard/tutorial" element={<PrivateRoute><CreateTutorialCategory/></PrivateRoute>} />
          <Route path="/edit-tutorialcategory/:id" element={<PrivateRoute><EditTutorialCategory/></PrivateRoute>} />
          <Route path="/dashboard/create-playlist" element={<PrivateRoute><CreateTutorial/></PrivateRoute>} />
          <Route path="/playlists" element={<PrivateRoute><TutorialList/></PrivateRoute> } />
          <Route path="/tutorial/:tutorialId" element={ <PrivateRoute><UpdateTutorial/></PrivateRoute>} />
        </Routes>
       
       </>
  



  );
};


export default App;
