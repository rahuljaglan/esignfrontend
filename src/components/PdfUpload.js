// src/components/PdfUpload.js
import React, { useState } from 'react';
import api from '../utils/api'; // Import your Axios instance

function PdfUpload() {
  const [pdfFile, setPdfFile] = useState(null);
  const [eSignTags, setESignTags] = useState([]);

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleUploadPdf = async () => {
    const formData = new FormData();
    formData.append('pdfFile', pdfFile);
    formData.append('eSignTags', JSON.stringify(eSignTags)); // Send eSign tags as a JSON string

    try {
      const response = await api.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('PDF uploaded:', response.data);
      // Handle the response as needed
    } catch (error) {
      console.error('Error uploading PDF:', error);
      // Handle the error as needed
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUploadPdf}>Upload PDF</button>
      {/* Add eSign tags to the state here */}
    </div>
  );
}

export default PdfUpload;
