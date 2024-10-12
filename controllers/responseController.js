const Response = require("../models/Response");

// API Endpoint for chat response
exports.chatResponse = async (req, res) => {
  const { query } = req.body;

  // Simulated API response
  const responseData = {
    summary: "This is a simulated response",
    result_text: `Result for your query: "${query}"`,
    result_table_path: "https://example.com/table",
    result_visualization_path: "https://example.com/viz",
    error: "",
  };

  res.json(responseData);
};

// API Endpoint for saving response to MongoDB
exports.saveResponse = async (req, res) => {
  const {
    query,
    userId,
    summary,
    result_text,
    result_table_path,
    result_visualization_path,
    error,
  } = req.body;

  try {
    const newResponse = new Response({
      query,
      userId,
      summary,
      result_text,
      result_table_path,
      result_visualization_path,
      error,
    });

    const savedResponse = await newResponse.save();
    res.json({
      message: "Response saved successfully",
      response: savedResponse,
    });
  } catch (error) {
    console.error("Error saving response:", error);
    res.status(500).json({ error: "Failed to save response" });
  }
};

// Fetch all responses API
exports.getAllResponses = async (req, res) => {
  try {
    const responses = await Response.find({});
    res.json(responses);
  } catch (error) {
    console.error("Error fetching responses:", error);
    res.status(500).json({ error: "Failed to fetch responses" });
  }
};
