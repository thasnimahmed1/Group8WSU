import React from "react";
import Select from "react-select";
import "./Taskbar.css";
import logo from "../images/logo-main.png"

const Taskbar = () => {
  const options1 = [
    { value: "CSC", label: "CSC" },
    { value: "BE", label: "CSC" },
  ];

  const options2 = [
    { value: "4420", label: "4420" },
    { value: "1200", label: "1200" },
  ];

  return (
    <div className="taskbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="taskbar-logo" />

      {/* Searchable Select Boxes */}
      <div className="taskbar-right">
        <Select options={options1} placeholder="Select Subject" className="taskbar-select" />
        <Select options={options2} placeholder="Select Course" className="taskbar-select" />
        {/* Search Button */}
        <button className="taskbar-button">Search</button>
      </div>
    </div>
  );
};

export default Taskbar;
