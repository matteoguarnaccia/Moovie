import React, { useState } from "react";
import logo from "../images/film-reel.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitSearch = (e) => {
    const value = inputValue;
    e.preventDefault();
    setInputValue("");
    navigate(`/search/${value}`);
  };
  return (
    <StyledNavbar>
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Moovie logo" />
          <h1>Moovie</h1>
        </div>
      </Link>
      <span>|</span>
      <nav>
        <ul>
          <li>Nuovi</li>
          <li>Film</li>
          <li>Serie TV</li>
          <li>Popolari</li>
          <li>Watchlist</li>
        </ul>
      </nav>
      <form onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="Cerca Film, Serie Tv o Persone..."
          value={inputValue}
          onChange={inputHandler}
        />
      </form>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  overflow-x: scroll;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  white-space: nowrap;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), #0a0818 50%);
  .logo-container {
    display: flex;
    align-items: center;
    img {
      width: 4rem;
      height: 4rem;
    }
    h1 {
      padding: 0rem 0.5rem;
      font-family: "Bebas Neue", cursive;
      font-size: 3.5rem;
      background: -webkit-linear-gradient(#fc7ffe, #ab3cff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  span {
    padding: 0rem 1rem;
    font-size: 3rem;
    font-weight: bold;
  }
  ul {
    letter-spacing: 0.1rem;
    padding: 0rem 1rem;
    display: flex;
    list-style: none;
    li {
      padding: 0rem 0.5rem;
      :hover {
        color: #d660fe;
      }
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
  form {
    width: 30%;
    margin-left: auto;
    display: flex;
    align-items: center;
    input {
      border-radius: 15px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background: none;
      padding: 0.5rem;
      width: 100%;
      color: white;
      letter-spacing: 0.1rem;
      :focus {
        outline: none;
        border: 2px solid #d660fe;
      }
    }
  }
`;

export default Navbar;
