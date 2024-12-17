// src/pages/Flight.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Flight.module.css'; // Importando o CSS modular

const Flight: React.FC = () => {
  const { search } = useLocation(); // Obtém a string de consulta da URL
  const queryParams = new URLSearchParams(search); // Analisa a query string
  const searchTerm = queryParams.get('search'); // Obtém o valor de "search" da query string

  return (
    <div className={styles.flight}>
      <h1 className={styles.title}>Flight Search Results</h1>
      {searchTerm ? (
        <p className={styles.description}>
          Searching for flights with the term: <strong className={styles.highlight}>{searchTerm}</strong>
        </p>
      ) : (
        <p className={styles.description}>No search term provided.</p>
      )}
    </div>
  );
};

export default Flight;
