const express = require("express");
const { signup, login, getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/users", getAllUsers);

module.exports = router;
