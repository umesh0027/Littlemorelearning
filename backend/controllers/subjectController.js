
const Subject = require("../models/Subject");

// Create a new subject 
exports.createSubject = async (req, res) => {
  try {
    const { title, description, notesUrl, category } = req.body;

    const newSubject = new Subject({
      title,
      description,
      notesUrl,
      category,
    });
    await newSubject.save();

    return res.status(201).json({
      success: true,
      message: "Subject created successfully",
      subject: newSubject,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create subject",
      error: error.message,
    });
  }
};

// Get all subjects (already provided)
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate("category",'name');
    return res.status(200).json({
      success: true,
      subjects,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch subjects",
      error: error.message,
    });
  }
};

// Update a subject
exports.updateSubject = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const { title, description, notesUrl, category } = req.body;

    const updatedSubject = await Subject.findByIdAndUpdate(
      subjectId,
      { title, description, notesUrl, category },
      { new: true } // Return the updated document
    );

    if (!updatedSubject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Subject updated successfully",
      subject: updatedSubject,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update subject",
      error: error.message,
    });
  }
};

// Delete a subject
exports.deleteSubject = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const deletedSubject = await Subject.findByIdAndDelete(subjectId);

    if (!deletedSubject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Subject deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete subject",
      error: error.message,
    });
  }
};


// Get a subject by its ID
exports.getSubjectById = async (req, res) => {
    const { subjectId } = req.params; // Extract subjectId from request parameters
  
    try {
      // Find the subject by its ID and populate the category (optional)
      const subject = await Subject.findById(subjectId).populate("category");
  
      if (!subject) {
        return res.status(404).json({
          success: false,
          message: "Subject not found",  // Return if subject is not found
        });
      }
  
      return res.status(200).json({
        success: true,
        subject,  // Return the subject details
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch subject",
        error: error.message,
      });
    }
  };