require("dotenv").config();
const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/upload.routes");
const analyzeRoutes = require("./routes/analyze.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/analyze", analyzeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
