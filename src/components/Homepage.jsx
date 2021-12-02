import React from "react";
import styled from "styled-components";

import {
  useGetPopularQuery,
  useGetTopRatedMoviesQuery,
} from "../services/tmdbApi";

import MovieCard from "./MovieCard";

const Homepage = () => {
  const { data: popularData, isFetching: popularIsFetching } =
    useGetPopularQuery();
  const { data: topRatedData, isFetching: topRatedIsFetching } =
    useGetTopRatedMoviesQuery();
  //console.log(popularData);
  console.log(topRatedData);

  if (popularIsFetching || topRatedIsFetching) return "Loading...";

  return (
    <MovieList>
      <div>
        <div className="popular">
          <h2>Film e Serie Tv del momento</h2>
          <Results>
            {popularData?.results?.map((item) => (
              <MovieCard
                title={item.title || item.name}
                poster={item.poster_path}
                release={item.release_date || item.first_air_date}
                rating={item.vote_average}
                id={item.id}
                type={item.title ? "movie" : "tv"}
                key={item.id}
              />
            ))}
          </Results>
        </div>
        <div className="now-playing">
          <h2>I film più votati</h2>
          <Results>
            {topRatedData?.results?.map((item) => (
              <MovieCard
                title={item.title}
                poster={item.poster_path}
                release={item.release_date}
                rating={item.vote_average}
                id={item.id}
                type={item.title ? "movie" : "tv"}
                key={item.id}
              />
            ))}
          </Results>
        </div>
      </div>
    </MovieList>
  );
};

const MovieList = styled.div``;

const Results = styled.div`
  position: relative;
  margin: 2rem 0rem;
  padding-left: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: visible;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Homepage;
