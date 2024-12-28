const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCategoryById,
  getSubjectsByCategory,
} = require("../controllers/notesController");

const { createSubject, getAllSubjects, updateSubject, deleteSubject ,getSubjectById} = require("../controllers/subjectController")

// Create a new category
router.post("/category", createCategory);

// Get all categories
router.get("/categories", getAllCategories);

// Update an existing category by ID
router.put("/category/:categoryId",updateCategory);

// Delete a category by ID
router.delete("/category/:categoryId", deleteCategory);

router.get("/category/:categoryId", getCategoryById); 

// Get subjects by category
router.get("/category/:categoryId/subjects", getSubjectsByCategory);


// Create a new subject
router.post("/subject", createSubject);

// Get all subjects
router.get("/subjects", getAllSubjects);

// Update a subject by ID
router.put("/subject/:subjectId", updateSubject);

// Delete a subject by ID
router.delete("/subject/:subjectId", deleteSubject);

// routes/subjectRoutes.js


router.get("/subject/:subjectId", getSubjectById);




module.exports = router;
