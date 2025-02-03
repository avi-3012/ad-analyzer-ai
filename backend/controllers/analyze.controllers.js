const { analyzeWithLangChain } = require("../services/langchain.service");
const { getAdData } = require("../utils/adDataStore");

const analyzeData = async (req, res) => {
    console.log("Analyzing ad data...");
    let adData = getAdData();
    console.log("Ad data:", adData);
    if (!adData) {
        return res.status(400).json({ error: "No CSV data available. Upload first." });
    }

    try {
        console.log("Analyzing with LangChain...");
        const analysisResult = await analyzeWithLangChain(adData); 
        res.json({ analysis: analysisResult });
    } catch (error) {
        res.status(500).json({ error: "Error analyzing ads" });
    }
};

module.exports = { analyzeData };
