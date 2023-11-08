// src/components/AddESignTag.js
import React, { useState, useContext } from 'react';
import { PdfContext } from '../context/PdfContext';

function AddESignTag() {
  const { state, dispatch } = useContext(PdfContext);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const handleAddTag = () => {
    // Dispatch action to add eSign tag to the state
    dispatch({ type: 'ADD_ESIGN_TAG', payload: { role, email } });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddTag}>Add eSign Tag</button>
    </div>
  );
}

export default AddESignTag;
