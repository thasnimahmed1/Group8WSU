import React from "react";
import "./RecordsList.css"; // Import styles

const RecordsList = ({ records }) => {
  return (
    <div className="records-container">
      {records.map((record, index) => (
        <div key={index} className="record-card">
          <h2 className="record-title">{record.title}</h2>
          <p className="record-subtitle">{record.timeRange}</p>
          <p className="record-class">{record.className}</p>
        </div>
      ))}
    </div>
  );
};

export default RecordsList;
