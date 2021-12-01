import { useLocation } from "react-router";
import styled from "styled-components";

import { useGetSearchQuery } from "../services/tmdbApi";

import MovieCard from "./MovieCard";

const SearchResults = () => {
  const queryString = useLocation().pathname.split("/")[2];
  const { data, isFetching } = useGetSearchQuery(queryString);
  if (isFetching) return "Loading...";
  console.log(data);
  return (
    <Results>
      {data?.results?.map((item) => (
        <MovieCard
          title={item.title || item.name}
          poster={item.poster_path}
          release={item.release_date || item.first_air_date}
          rating={item.vote_average}
          id={item.id}
          type={item.title ? "movie" : "tv"}
        />
      ))}
    </Results>
  );
};

const Results = styled.div`
  margin-top: 10%;
  padding: 0rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export default SearchResults;
