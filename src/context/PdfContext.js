// src/context/PdfContext.js
import React, { createContext, useReducer } from 'react';

const PdfContext = createContext();

const pdfReducer = (state, action) => {
  switch (action.type) {
    case 'UPLOAD_PDF':
      // Handle PDF upload and state update
      return state;
    case 'ADD_ESIGN_TAG':
      // Handle adding eSign tag to the PDF
      return state;
    default:
      return state;
  }
};

const PdfProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pdfReducer, { pdfs: [], eSignTags: [] });

  return (
    <PdfContext.Provider value={{ state, dispatch }}>
      {children}
    </PdfContext.Provider>
  );
};

export { PdfContext, PdfProvider };
