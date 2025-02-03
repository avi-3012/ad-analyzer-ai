const multer = require("multer");
const csvParser = require("csv-parser")
const { setAdData } = require("../utils/adDataStore")

// Configure storage for uploaded files
const storage = multer.memoryStorage();

const upload = multer({ storage }).single("file");

const uploadFile = (req, res) => {
    console.log("running: ", req);
    upload(req, res, (err) => {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
    
        const results = [];
        const buffer = req.file.buffer.toString("utf-8");
    
        // Parse CSV from buffer
        require("streamifier")
            .createReadStream(buffer)
            .pipe(csvParser())
            .on("data", (data) => results.push(data))
            .on("end", () => {
                console.log("Uploaded file data:", results);
                setAdData(results);
                res.json({ message: "File uploaded and stored in memory" });
            });
    });
};

module.exports = { uploadFile };
