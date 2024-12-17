// src/components/Footer.tsx

import React from 'react';
import styles from './Footer.module.css'; // Importando o CSS modular

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2024 Your Company. All rights reserved.</p>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>About</a>
          <a href="/contact" className={styles.link}>Contact</a>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
