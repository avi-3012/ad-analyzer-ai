import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import UploadPage from "./pages/uploadPage";
import AnalyzePage from "./pages/analyzePage";
import Menu from "./components/sidePanel";
import Summary from "./components/summary";
import ComingSoon from "./pages/comingSoonPage";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", maxWidth: "1200px", margin: "0 auto", backgroundColor:"#f1f1fb" }}>
      <div style={{ width: "200px" }}>
        <Menu />
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/profile" element={<ComingSoon />} />
          <Route path="/wallet" element={<ComingSoon />} />
        </Routes>
      {/* </Router> */}
      </div>
      <div style={{ width: "350px" }}>
        <Summary />
      </div>
    </div>
  );
}

export default App;
