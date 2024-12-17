// src/pages/Home.tsx

import React from 'react';
import styles from './Home.module.css'; // Importando a folha de estilo modular

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to Our Flight Search</h1>
      <p className={styles.description}>
        Find the best flights at the best prices. Start your search by typing in the search bar above!
      </p>
    </div>
  );
};

export default Home;
