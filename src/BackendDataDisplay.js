import React, { useEffect, useState } from 'react';

function BackendDataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/someEndpoint') // Replace with your backend endpoint
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Data from the Backend:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default BackendDataDisplay;
