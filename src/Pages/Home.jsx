import React from "react";
import "./Home.css"
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="Image"><img src="" alt="" /></div>
      <div className="Upload">
        <button className="ubtn"><h1>Upload File</h1></button>
        <br />
        <h3>Or drop a file</h3>
      </div>
    </div>
  );
};

export default HomePage;
