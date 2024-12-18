// src/pages/Home.tsx

import React from 'react';
import styles from './Home.module.css'; // Importando a folha de estilo modular
import InputBar from '../components/InputBar';

const Home: React.FC = () => {
  return (
    <div className='container-fluid bord g-0'>
    <div className={`${styles.home} bord `}>
      <InputBar/>
    <h1 className={`${styles.title} bord`}>Welcome to Our Flight Search</h1>
    <p className={`${styles.description} bord`}>
      Find the best flights at the best prices. Start your search by typing in the search bar above!
    </p>
  </div>
  </div>
  );
};

export default Home;
