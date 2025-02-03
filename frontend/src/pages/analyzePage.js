import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AnalyzePage = () => {
  const location = useLocation();
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const analyzeFile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/analyze");
        setAnalysis(response?.data?.analysis);
      } catch (error) {
        alert("Analysis failed.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    analyzeFile();
  }, [location.state]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <div style={{ fontWeight: "bold", color: "#1f2a67", fontSize: "25px" , marginBottom:"40px"}}>
        Analysis Report
        </div>
      {loading ? (
        <p>Analyzing...</p>
      ) : (
        <div style={{ textAlign: "left" }}>
          <Markdown remarkPlugins={[remarkGfm]}>{analysis?.kwargs?.content}</Markdown>
        </div>
      )}
    </div>
  );
};

export default AnalyzePage;
