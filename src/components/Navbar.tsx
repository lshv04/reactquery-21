import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/navbar/logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-sm fixed-top`}>
      <div className="container bord">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className={styles.logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i
            className="bi bi-list"
            style={{ fontSize: "2rem", color: "white" }}
          ></i>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-link"]} ${styles.active}`
                    : styles["nav-link"]
                }
                to="/"
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
