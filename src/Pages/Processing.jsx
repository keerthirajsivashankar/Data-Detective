import React, { useState } from "react";
import Papa from "papaparse"; // Import PapaParse

const ProcessingPage = () => {
  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState([]); // To store parsed CSV data

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    if (uploadedFile && uploadedFile.type === "text/csv") {
      // Use PapaParse to parse the CSV file
      Papa.parse(uploadedFile, {
        complete: (result) => {
          console.log("Parsed CSV result:", result);
          setCsvData(result.data); // Save parsed data
        },
        header: true, // Optional: treat the first row as headers
      });
    } else {
      alert("Please upload a valid CSV file!");
    }
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
        <div className="pr">
          <h1>Upload and Process Data</h1>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="file-upload" className="ubtn">
            <h2>Choose File</h2>
          </label>
          <button className="ubtn" onClick={handleProcess}>
            <h2>Process File</h2>
          </button>
          {file && <p>Uploaded File: {file.name}</p>}
        </div>

        <div className="pl">
          <h3>CSV Preview:</h3>
          <table>
            <thead>
              <tr>
                {csvData[0] && Object.keys(csvData[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="result">
        <h2 className="result1">Result</h2>
      </div>
    </div>
  );
};

export default ProcessingPage;
