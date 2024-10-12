const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb://aslahcholasseri:T5KbvhAzE3YKcKDo@ac-7ec65wy-shard-00-00.ylh5ecm.mongodb.net:27017,ac-7ec65wy-shard-00-01.ylh5ecm.mongodb.net:27017,ac-7ec65wy-shard-00-02.ylh5ecm.mongodb.net:27017/chatbot?ssl=true&replicaSet=atlas-q0c0g5-shard-0&authSource=admin&retryWrites=true&w=majority&appName=chatbot";
// Replace with your MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
