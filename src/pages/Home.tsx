

import React from "react";
import styles from "./Home.module.css";
import InputBar from "../components/InputBar";

const Home: React.FC = () => {
  return (
    <div className={`${styles.home} bord container-fluid`}>
      <div className="container bord">
        <div className="row">
          <div className="col-12 col-md-4 bord">
            <h1 className={`${styles.title} bord`}>
              Welcome to Our Flight Search
            </h1>
            <p className={`${styles.description} bord`}>
              Use your flight number to discover everything you need to know
              about your flight!
            </p>
            <InputBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
