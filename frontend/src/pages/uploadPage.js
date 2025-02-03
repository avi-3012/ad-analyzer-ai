import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const ref = React.createRef();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, formData);
      if (response.status !== 200) {
        throw new Error("Upload failed.");
      }
      alert("File uploaded successfully!");
      navigate("/analyze");
    } catch (error) {
      alert("File upload failed.");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <div style={{ fontWeight: "bold", color: "#1f2a67", fontSize: "25px" , marginBottom:"40px"}}>
        Upload CSV File
        </div>
      <input ref={ref} type="file" accept=".csv" onChange={handleFileChange} style={{ width:"0px"}}/>
      <button onClick={() => ref.current.click()} style={{backgroundColor:"white", outline:"none", border:"1px solid gray", padding:"10px", borderRadius:"10px", width:"200px", marginRight:"20px"}}>{file? file?.name:"Select file"}</button>
      <button onClick={handleUpload} disabled={uploading} style={{backgroundColor:"white", outline:"none", border:"1px solid gray", padding:"10px", borderRadius:"10px", width:"200px"}}>
        {uploading ? "Uploading..." : "Upload & Analyze"}
      </button>
    </div>
  );
};

export default UploadPage;
