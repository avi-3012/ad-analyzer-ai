const express = require("express");
const { analyzeData } = require("../controllers/analyze.controllers");

const router = express.Router();

// Analyze endpoint
router.get("/", analyzeData);

module.exports = router;
