const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  maxOutputTokens: 2048,
  apiKey: process.env.API_KEY,
});

const analyzeWithLangChain = async (keywords) => {
    console.log("Analyzing with LLM...");
    const prompt = `
        Important: Round up each decimal number.
        Do not show irrelevant data in the analysis report.

        Analyze the given advertising campaign data by user and provide an analysis report in the following structure:

        1. Identify 4 high-performing advertising keywords based on:
        - High ROAS
        - Low ACOS
        - High CTR
        - Strong click-to-purchase conversion

        2. Identify 4 low-performing advertising keywords

        3. Suggest improvements for underperforming keywords under 100 words.
    `;

    try {
        console.log("Calling LangChain...");
        console.log("Prompt:", keywords[0]);
        const response = await model.invoke([
            [
                "system",
                prompt
            ],
            [
                "human",
                keywords
            ]
        ]);
        console.log("Analysis with LLM:", response);
        console.log("Analysis complete.", prompt);
        return response;
    } catch (error) {
        console.error("Error analyzing with LLM:", error);
        return "error";
    }
};

module.exports = { analyzeWithLangChain };
