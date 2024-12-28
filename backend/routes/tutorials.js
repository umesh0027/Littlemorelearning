const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCategoryById,
  getTutorialsByCategory
  
} = require("../controllers/TutorialCategoryController");

const { createTutorial, getAllTutorials, updateTutorial, deleteTutorial ,getTutorialById} = require("../controllers/TutorialController")

// Create a new category
router.post("/category", createCategory);

// Get all categories
router.get("/categories", getAllCategories);

// Update an existing category by ID
router.put("/category/:categoryId",updateCategory);

// Delete a category by ID
router.delete("/category/:categoryId", deleteCategory);

router.get("/category/:categoryId", getCategoryById); 

// Get Tutorials by category
router.get("/category/:categoryId/tutorials", getTutorialsByCategory);


// Create a new Tutorial
router.post("/tutorial", createTutorial);

// Get all Tutorials
router.get("/tutorials", getAllTutorials);

// Update a Tutorial by ID
router.put("/tutorial/:tutorialId", updateTutorial);

// Delete a Tutorial by ID
router.delete("/tutorial/:tutorialId", deleteTutorial);

// routes/TutorialRoutes.js


router.get("/tutorial/:tutorialId", getTutorialById);




module.exports = router;
