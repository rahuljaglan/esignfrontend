// src/components/ESignSubmit.js
import React from 'react';
import api from '../utils/api'; // Import your Axios instance

function ESignSubmit() {
  const handleESignSubmit = async () => {
    try {
      const response = await api.post('/api/esign-submit', {
        // Include any relevant data for the eSign submission
      });

      console.log('ESign request submitted:', response.data);
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting eSign request:', error);
      // Handle the error as needed
    }
  };

  return (
    <div>
      <button onClick={handleESignSubmit}>Submit for eSign</button>
    </div>
  );
}

export default ESignSubmit;
