// Import the Mongoose library
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
  {
   
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
    },

    
    password: {
      type: String,
      required: true,
    },
    
    accountType: {
      type: String,
      enum: ["Admin", "Student"],
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    approved: {
      type: Boolean,
      default: true,
    },
  
  
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    image: {
      type: String,
    },
   
  },
  { timestamps: true }
)


module.exports = mongoose.model("user", userSchema)
