import React from "react";
import styles from "../style/header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <h1 onClick={navigateToHome}>Movie App</h1>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>4K</li>
          <li>Trending</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
