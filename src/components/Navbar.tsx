// src/components/Navbar.tsx

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/navbar/logo.png"; 

const Navbar: React.FC = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg `}>
      <div className="container">
      <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className={styles.logo} /> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-link"]} ${styles.active}`
                    : styles["nav-link"]
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-link"]} ${styles.active}`
                    : styles["nav-link"]
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
