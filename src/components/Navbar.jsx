import logo from "../images/film-reel.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Moovie logo" />
          <h1>Mooovie</h1>
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
      <SearchBar />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  white-space: nowrap;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), #0a0818 40%);
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
  @media (max-width: 1000px) {
    flex-direction: column;
    background: linear-gradient(to top, rgba(0, 0, 0, 0), #0a0818 12%);
    .logo-container {
      margin-bottom: 1rem;
      img {
        width: 2rem;
        height: 2rem;
      }
      h1 {
        font-size: 2rem;
      }
    }
    span {
      display: none;
    }
    nav {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
  }
`;

export default Navbar;
