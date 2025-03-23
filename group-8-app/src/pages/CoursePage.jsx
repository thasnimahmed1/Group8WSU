// src/pages/CoursePage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import RecordsList from "../components/RecordsList";
import Taskbar from "../components/Taskbar";
import "../styles/CoursePage.css"; 

export default function CoursePage() {
  const { courseCode } = useParams();

  const courseTitle = "Advanced Operating Systems";
  const subjectName = "Computer Science";
  const records = [
    { title: "Group 1", timeRange: "9:00 AM - 10:00 AM", className: "Zoom Link A" },
    { title: "Group 2", timeRange: "1:00 PM - 2:30 PM", className: "Library Room B" }
  ];

  const handleAddGroup = () => {
    alert("Add Group button clicked! (You can wire this to a form/modal)");
  };

  return (
    <div>
      <Taskbar />
      <div className="course-header">
        <h1>{courseCode || "CSC 4420"} - {courseTitle}</h1>
        <h3>Subject: {subjectName}</h3>
      </div>

      <div className="course-body">
        <div className="course-controls">
          <button className="add-group-button" onClick={handleAddGroup}>
            ➕ Add Study Group
          </button>
        </div>
        <RecordsList records={records} />
      </div>
    </div>
  );
}
