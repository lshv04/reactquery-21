import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputBar.module.css";

const InputBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      setError("Please enter a search term.");
    } else {
      setError("");
      navigate(`/flight?search=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.inputBarForm}>
      <input
        type="text"
        className={styles.inputBarInput}
        placeholder="Search flight"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className={styles.inputBarButton}>
        <i className="bi bi-search"></i>
      </button>

      {error && <div className={styles.inputBarError}>{error}</div>}
    </form>
  );
};

export default InputBar;
