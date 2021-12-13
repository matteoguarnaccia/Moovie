import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useGetSearchQuery } from "../services/tmdbApi";
import default_poster from "../images/poster_default.jpg";

const SearchBar = () => {
  const [isActive, setIsActive] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const { data, isFetching } = useGetSearchQuery(inputValue);
  const preview_base_url = "https://image.tmdb.org/t/p/w200";
  const navigate = useNavigate();

  const submitSearch = (e) => {
    const value = inputValue;
    e.preventDefault();
    setInputValue("");
    navigate(`/search/${value}`);
  };
  const inputHandler = (e) => {
    setInputValue(e.target.value);
    setIsActive(true);
  };
  const exitHandler = (e) => {
    if (!document.getElementById("input-component").contains(e.target)) {
      setIsActive(false);
    }
  };
  useEffect(() => {
    if (isActive) {
      window.addEventListener("click", exitHandler);
    } else {
      window.removeEventListener("click", exitHandler);
    }
  }, [isActive, inputValue]);
  return (
    <Form onSubmit={submitSearch} id="input-component">
      <input
        type="text"
        placeholder="Cerca Film, Serie Tv o Persone..."
        value={inputValue}
        onChange={inputHandler}
      />
      {data?.results && inputValue && isActive && (
        <SearchPreview>
          {data?.results?.map((item) => (
            <Link to={`/${item?.media_type}/${item?.id}`} key={item?.id}>
              <div className="item-preview" onClick={() => setInputValue("")}>
                <div className="poster-preview">
                  <img
                    src={
                      item?.poster_path
                        ? `${preview_base_url}${item?.poster_path}`
                        : default_poster
                    }
                    alt={item?.title}
                  />
                </div>
                <div className="info-preview">
                  <h3>{item?.title || item?.name}</h3>
                  <p>{item?.release_date?.split("-")[0]}</p>
                </div>
              </div>
            </Link>
          ))}
        </SearchPreview>
      )}
    </Form>
  );
};

const Form = styled.form`
  z-index: 5;
  position: relative;
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
  @media (max-width: 1000px) {
    width: 80%;
    margin: auto;
  }
`;

const SearchPreview = styled.div`
  z-index: 4;
  padding: 0.5rem;
  position: absolute;
  background: black;
  top: 130%;
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
  border-radius: 15px;
  background: linear-gradient(
    to right bottom,
    rgba(10, 8, 24, 0.7),
    rgba(10, 8, 24, 0.3)
  );
  backdrop-filter: blur(2rem);
  ::-webkit-scrollbar {
    display: none;
  }
  .item-preview {
    display: flex;
    padding: 0.5rem 0.5rem;
    border-radius: 15px;
    align-items: center;
    overflow-x: hidden;
    :hover {
      background: linear-gradient(
        to right bottom,
        rgba(10, 8, 24, 0.6),
        rgba(10, 8, 24, 0.3)
      );
    }
    .poster-preview {
      min-width: 4rem;
      max-width: 4rem;
      max-height: 6rem;
      border-radius: 12px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .info-preview {
      margin-left: 0.5rem;
      h3 {
        font-size: 1rem;
        opacity: 0.5;
      }
    }
  }
`;

export default SearchBar;
