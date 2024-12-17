// src/pages/Flight.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const Flight: React.FC = () => {
  const { search } = useLocation(); // Obtém a string de consulta da URL
  const queryParams = new URLSearchParams(search); // Analisa a query string
  const searchTerm = queryParams.get('search'); // Obtém o valor de "search" da query string

  return (
    <div>
      <h1>Flight Search Results</h1>
      {searchTerm ? (
        <p>Searching for flights with the term: <strong>{searchTerm}</strong></p>
      ) : (
        <p>No search term provided.</p>
      )}
    </div>
  );
};

export default Flight;
