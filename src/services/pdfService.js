// pdfService.js

import axios from 'axios';

const uploadPdf = async (pdfFile) => {
  const formData = new FormData();
  formData.append('pdf', pdfFile);

  try {
    const response = await axios.post(
      'http://localhost:3000/pdf/upload',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error uploading PDF.');
  }
};

export { uploadPdf };
