import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import Authentication from "./Authentication";
import CoursePage from "./CoursePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/courses" element={<CoursePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);