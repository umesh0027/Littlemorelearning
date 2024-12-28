
const mongoose = require("mongoose");

const TutorialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    TutorialUrl: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TutorialCategory", 
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tutorial", TutorialSchema);
