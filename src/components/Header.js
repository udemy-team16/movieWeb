import React from "react";
import styles from "../style/header.module.css";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <h1 onClick={navigateToHome}>Movie App</h1>
      <nav className={styles.nav}>
        <form action="" className="form-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="img-glass" />
          <input type="search" className="inp-search" />
        </form>
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