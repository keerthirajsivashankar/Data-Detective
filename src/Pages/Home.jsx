import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"
const HomePage = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/processing"); // Navigate to the Processing page
  };
  return (
    <div className="home-page">
      <div className="Image"><img src="" alt="" /></div>
      <div className="Upload">
        <button className="ubtn" onClick={handleUploadClick}><h1>Upload File</h1></button>
        <br />
        <h3>Or drop a file</h3>
        <br />   
      </div>
    </div>
  );
};

export default HomePage;
