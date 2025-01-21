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
      <h2>Upload and Process Data</h2>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleProcess}>Process File</button>
      {file && <p>Uploaded File: {file.name}</p>}
    </div>
  );
};

export default ProcessingPage;
