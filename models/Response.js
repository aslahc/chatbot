const mongoose = require("mongoose");

// Define Response Schema
const responseSchema = new mongoose.Schema({
  query: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  summary: String,
  result_text: String,
  result_table_path: String,
  result_visualization_path: String,
  error: String,
});

// Create Response Model
const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
