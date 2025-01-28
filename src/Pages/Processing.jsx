import React, { useState } from "react";

const ProcessingPage = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleProcess = () => {
    if (file) {
      console.log("Processing file:", file.name);
      // Add file processing logic here
    } else {
      alert("Please upload a file!");
    }
  };

  return (
    <div className="processing-page">
      <div className="result-1">
        <h1>Upload and Process Data</h1>
        {/* Hidden file input */}
        <input
          id="file-upload"
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
        {/* Label styled as button */}
        <label htmlFor="file-upload" className="ubtn">
          <h2>Choose File</h2>
        </label>
        <button className="ubtn" onClick={handleProcess}><h2>Process File</h2></button>
        {file && <p>Uploaded File: {file.name}</p>}
      </div>
      <div className="result">
        <h2>Result</h2>
      </div>
    </div>
  );
};

export default ProcessingPage;
