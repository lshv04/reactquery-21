// src/pages/About.tsx

import React from 'react';
import styles from './About.module.css'; // Importando o CSS modular

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        We are a company dedicated to providing the best flight search experience.
      </p>
      <p className={styles.description}>
        Our goal is to help you find the most affordable flights and travel easily.
      </p>
    </div>
  );
};

export default About;
