const { Router } = require("express");
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = express.Router();

// Admin Routes (/admin/signup) quki main index.js mein admin krke call kiya hai is router ko
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  // check if a user with this username already exists
  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
