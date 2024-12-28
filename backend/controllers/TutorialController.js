
const Tutorial = require("../models/Tutorial");

// Create a new Tutorial (already provided)
exports.createTutorial = async (req, res) => {
  try {
    const { title, description, TutorialUrl, category } = req.body;

    const newTutorial = new Tutorial({
      title,
      description,
      TutorialUrl,
      category,
    });
    await newTutorial.save();

    return res.status(201).json({
      success: true,
      message: "Tutorial created successfully",
      tutorial: newTutorial,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create Tutorial",
      error: error.message,
    });
  }
};

// Get all Tutorial (already provided)
exports.getAllTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find().populate("category",'name');
    return res.status(200).json({
      success: true,
      tutorials,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Tutorials",
      error: error.message,
    });
  }
};

// Update a Tutorial
exports.updateTutorial = async (req, res) => {
  try {
    const { tutorialId } = req.params;
    const { title, description, TutorialUrl, category } = req.body;

    const updatedTutorial = await Tutorial.findByIdAndUpdate(
        tutorialId,
      { title, description, TutorialUrl, category },
      { new: true } // Return the updated document
    );

    if (!updatedTutorial) {
      return res.status(404).json({
        success: false,
        message: "Tutorial not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tutorial updated successfully",
      tutorial: updatedTutorial,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update Tutorial",
      error: error.message,
    });
  }
};

// Delete a Tutorialt
exports.deleteTutorial = async (req, res) => {
  try {
    const { tutorialId } = req.params;

    const deletedTutorial = await Tutorial.findByIdAndDelete(tutorialId);

    if (!deletedTutorial) {
      return res.status(404).json({
        success: false,
        message: "Tutorial not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tutorial deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete Tutorial",
      error: error.message,
    });
  }
};


// Get a Tutorial by its ID
exports.getTutorialById = async (req, res) => {
    const { tutorialId } = req.params; // Extract TutorialId from request parameters
  
    try {
      // Find the Tutorial by its ID and populate the category (optional)
      const tutorial = await Tutorial.findById(tutorialId).populate("category");
  
      if (!tutorial) {
        return res.status(404).json({
          success: false,
          message: "Tutorial not found",  // Return if Tutorial is not found
        });
      }
  
      return res.status(200).json({
        success: true,
        tutorial,  // Return the Tutorial details
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch Tutorial",
        error: error.message,
      });
    }
  };