require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 5000,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    UPLOADS_FOLDER: process.env.UPLOADS_FOLDER || "uploads/",
};
