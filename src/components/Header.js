import React from "react";
import styles from "../style/header.module.css";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInput from "../hooks/useInput";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const [value, setValue, handleChange] = useInput("");

  const handleSubmit = async (event) => {
    console.log("전송됨", value);
    event.preventDefault();
    const movieName = value;
    try {
      const navigateToSearch = () => {
        navigate(`/movie/search/${movieName}`);
      };
      navigateToSearch();
      setValue("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className={styles.header}>
      <h1 onClick={navigateToHome}>Movie App</h1>
      <nav className={styles.nav}>
        <form className={styles.formSearch} onSubmit={handleSubmit}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.imgGlass}
          />
          <input
            type="search"
            className={styles.inpSearch}
            placeholder="영화 제목을 입력하세요"
            value={value}
            onChange={handleChange}
          />
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
