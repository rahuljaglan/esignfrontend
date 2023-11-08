// src/components/SubmitForESign.js
import React, { useContext } from 'react';
import axios from 'axios';
import { PdfContext } from '../context/PdfContext';

function SubmitForESign() {
  const { state } = useContext(PdfContext);

  const handleESignSubmit = async () => {
    try {
      const response = await axios.post('/api/esign', {
        pdfFile: 'your-pdf-file.pdf',
        eSignTags: state.eSignTags,
      });

      console.log('ESign request submitted:', response.data);
    } catch (error) {
      console.error('Error submitting eSign request:', error);
    }
  };

  return (
    <div>
      <button onClick={handleESignSubmit}>Submit for eSign</button>
    </div>
  );
}

export default SubmitForESign;
