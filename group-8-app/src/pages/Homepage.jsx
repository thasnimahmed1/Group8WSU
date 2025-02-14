import React from "react";
import "./Homepage.css"
import RecordsList from "../components/RecordsList";

export default function Homepage() {
  const records = [
    { title: "Math 101", timeRange: "8:00 AM - 9:30 AM", className: "Room A" },
    { title: "History 202", timeRange: "10:00 AM - 11:30 AM", className: "Room B" },
    { title: "Physics 303", timeRange: "1:00 PM - 2:30 PM", className: "Room C" }
  ];

  return (
    <div>
      <div className="homepage-1">
        <h1 className="greeting">Coming soon...</h1>
      </div>
      <div className="homepage-2">
        <h3>Your study groups:</h3>
        <RecordsList records={records} />
      </div>
    </div>
  );
}