const express = require("express");
const {
  chatResponse,
  saveResponse,
  getAllResponses,
} = require("../controllers/responseController");

const router = express.Router();

router.post("/chat", chatResponse);
router.post("/save-response", saveResponse);
router.get("/responses", getAllResponses);

module.exports = router;
