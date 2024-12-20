import React from "react";
import styles from "./Footer.module.css";
import Sticker from "./Sticker";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Sticker />
        <p className={styles.text}>
          © 2024 Leandro Hosken. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
