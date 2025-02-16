import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Authentication.css"; 

const Authentication = () => {
  const [accessId, setAccessId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/homepage"); 
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Academica Login</h2>
        <p className="auth-description">
          Please enter your Wayne State <a href="#">AccessID</a> and password.
        </p>
        <form onSubmit={handleLogin} className="auth-form">
          <label htmlFor="accessId">Your Wayne State AccessID</label>
          <input type="text" id="accessId" value={accessId} onChange={(e) => setAccessId(e.target.value)} required />
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
