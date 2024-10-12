const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const responseRoutes = require("./routes/responseRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define Routes
app.use("/api", userRoutes);
app.use("/api", responseRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
