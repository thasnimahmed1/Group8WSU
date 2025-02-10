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

  const selectStyle = {
    control: (base) => ({
      ...base,
      backgroundColor: "white",
      color: "black",
    }),
    singleValue: (base) => ({
      ...base,
      color: "black",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "white",
    }),
    option: (base, state) => ({
      ...base,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#3b82f6" : "white",
      ":hover": {
        backgroundColor: "#e2e8f0",
      },
    }),
  };  

  return (
    <div className="taskbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="taskbar-logo" />

      {/* Title Banner */}
      <h2 className="title">WSU Study Groups</h2>

      {/* Searchable Select Boxes */}
      <div className="taskbar-right">
        <Select options={options1} placeholder="Select Subject" styles={selectStyle} className="taskbar-select" />
        <Select options={options2} placeholder="Select Course" styles={selectStyle} className="taskbar-select" />
        {/* Search Button */}
        <button className="taskbar-button">Search</button>
      </div>
    </div>
  );
};

export default Taskbar;
