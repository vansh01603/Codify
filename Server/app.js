const express = require("express");
const cors = require("cors"); 
const chalk = require("chalk");
require("dotenv").config();
const connectDB = require("./config/dbConn");
const UserRouter = require("./routes/UserRoutes");

const app = express();
const PORT = process.env.PORT || 1001;

// Enable CORS for all origins (or restrict if needed)
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", UserRouter);

// Start server
connectDB(); // connect to MongoDB
app.listen(PORT, () => {
  console.log(chalk.green(`✅ Server running at http://localhost:${PORT}`));
});
