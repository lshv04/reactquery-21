// src/components/Sticker.tsx

import React from 'react';
import styles from './Sticker.module.css'; 

const Sticker: React.FC = () => {
  return (
    <div className={`${styles.sticker} g-0`}>
      <a href="https://www.linkedin.com/in/leandrohosken/" target="_blank" className="text-decoration-none">
        <i className={`${styles.icon} bi bi-linkedin`}></i>
      </a>
      <a href="https://github.com/lshv04" target="_blank" className="text-decoration-none">
        <i className={`${styles.icon} bi bi-github`}></i>
      </a>
      <a href="https://wa.me/5531987670611" target="_blank" className="text-decoration-none">
        <i className={`${styles.icon} bi bi-whatsapp`}></i>
      </a>
      <a href="mailto:lshv04@gmail.com" target="_blank" className="text-decoration-none">
        <i className={`${styles.icon} bi bi-envelope`}></i>
      </a>
    </div>
  );
};

export default Sticker;
