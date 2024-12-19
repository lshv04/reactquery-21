// src/pages/About.tsx

import React from "react";
import styles from "./About.module.css"; // Importando o CSS modular

const About: React.FC = () => {
  return (
    <div className={`container-fluid bord ${styles.about}`}>
      <div className="container bord">
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        This project was developed by Leandro Hosken with the goal of learning
        and improving skills in Axios API fetching, as well as in React Query
        caching.
      </p>
    </div>
    </div>
  );
};

export default About;
