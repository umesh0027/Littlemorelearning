
const TutorialCategory =require("../models/TutorialCategory");
const Tutorial = require("../models/Tutorial");
// Create a new Tutorial category
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if category name already exists
    const existingCategory = await TutorialCategory.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    // Create and save new category
    const newCategory = new TutorialCategory({
      name,
      description,
    });
    await newCategory.save();

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
};

// Get all note categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await TutorialCategory.find();
    return res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
      error: error.message,
    });
  }
};
exports.getCategoryById = async (req, res) => {
    const { categoryId } = req.params; // Get categoryId from the URL
    try {
      const category = await TutorialCategory.findById(categoryId); // Find category in the database by ID
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json({ category }); // Send back the category data
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
  
// Update an existing Tutorial category
exports.updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description } = req.body;

    // Find category by ID and update
    const updatedCategory = await TutorialCategory.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true } // Return the updated document
    );

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update category",
      error: error.message,
    });
  }
};

// Delete a note category
exports.deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Find and delete category by ID
    const deletedCategory = await TutorialCategory.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete category",
      error: error.message,
    });
  }
};




// Get all Tutorials by category ID
exports.getTutorialsByCategory = async (req, res) => {
  const { categoryId } = req.params; // Get category ID from URL

  try {
    // Find the category by ID to check if it exists
    const category = await TutorialCategory.findById(categoryId);
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    // Fetch Tutorials related to this category
    const tutorials = await Tutorial.find({ category: categoryId });

    return res.status(200).json({
      success: true,
      tutorials,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Tutorials for the category",
      error: error.message,
    });
  }
};