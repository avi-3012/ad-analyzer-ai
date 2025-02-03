const express = require("express");
const { uploadFile } = require("../controllers/upload.controllers");

const router = express.Router();

// Upload endpoint
router.post("/", uploadFile);

module.exports = router;
