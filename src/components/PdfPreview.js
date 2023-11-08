// src/components/PdfPreview.js
import React, { useContext } from 'react';
import { Document, Page } from 'react-pdf';
import { PdfContext } from '../context/PdfContext';

function PdfPreview() {
  const { state } = useContext(PdfContext);

  return (
    <div>
      <Document file="your-pdf-file.pdf">
        {state.eSignTags.map((tag, index) => (
          <Page key={index} pageNumber={1}>
            <div
              style={{
                position: 'absolute',
                left: tag.x, // Set the X position of the tag
                top: tag.y, // Set the Y position of the tag
              }}
            >
              {tag.role}
            </div>
          </Page>
        ))}
      </Document>
    </div>
  );
}

export default PdfPreview;
