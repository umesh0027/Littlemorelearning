// Importing necessary modules and packages
const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const noteCategoryRoutes = require("./routes/notes");
const tutorialCategoryRoutes = require("./routes/tutorials");
const database = require("./config");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const dotenv = require("dotenv");


// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
database.connect();
 
// Middlewares
app.use(express.json());
app.use(cookieParser());


// app.use(
// 	cors({
// 		origin: "*",
// 		credentials: true,
// 	})
// );



// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/notes", noteCategoryRoutes);
app.use("/api/v1/tutorial", tutorialCategoryRoutes);

app.post("/api/v1/contact", async (req, res) => {
	const { name, email, message } = req.body;
  
	if (!name || !email || !message) {
	  return res.status(400).json({ error: "All fields are required" });
	}
  
	// Configure the email transporter
	const transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		auth: {
		  user: process.env.MAIL_USER,
		  pass: process.env.MAIL_PASS,
		},
	});
  
	// Email details
	const mailOptions = {
	  from: email, // Sender's email address
	  to: process.env.MAIL_USER, // Your email address from .env
	  subject: `New Contact Us Message from ${name}`,
	  text: `
		Name: ${name}
		Email: ${email}
		Message: ${message}
	  `,
	};
  
	try {
	  // Send the email
	  await transporter.sendMail(mailOptions);
	  res
		.status(200)
		.json({ message: "Your message has been sent successfully!" });
	} catch (error) {
	  console.error("Error sending email:", error);
	  res
		.status(500)
		.json({ error: "Failed to send the message. Please try again." });
	}
  });

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});


