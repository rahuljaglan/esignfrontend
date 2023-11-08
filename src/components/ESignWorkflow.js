import React, { useState } from 'react';
import axios from 'axios';
import ESigntagsComponent from './ESigntagsComponent'; // Your eSign tags component
import PDFFileInput from './PDFFileInput'; // Your PDF file input component

function ESignWorkflow() {
  const [pdfFile, setPdfFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (file) => {
    setPdfFile(file);
  };

  const handleUploadPdf = async () => {
    // Validate that a PDF file is selected.
    if (!pdfFile) {
      setErrorMessage('Please select a PDF file.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
      // Make an HTTP POST request to your NestJS backend to upload the PDF.
      await axios.post('http://localhost:3000/pdf/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Display a success message.
      setSuccessMessage('PDF uploaded successfully.');
      setErrorMessage('');
    } catch (error) {
      // Handle API request error and display an error message.
      setSuccessMessage('');
      setErrorMessage('Error uploading PDF.');
    }
  };

  return (
    <div>
      <h1>PDF Upload</h1>
      {/* Render the PDF file input component */}
      <PDFFileInput onFileChange={handleFileChange} />
      <ESigntagsComponent />
      <button onClick={handleUploadPdf}>Upload PDF</button>
      <p>{successMessage}</p>
      <p>{errorMessage}</p>
    </div>
  );
}

export default ESignWorkflow;
