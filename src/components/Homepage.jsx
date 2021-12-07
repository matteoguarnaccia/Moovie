import React from "react";
import styled from "styled-components";
import SwiperCore, { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";

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
  SwiperCore.use([FreeMode]);
  return (
    <MovieList>
      <div>
        <div className="popular">
          <h2>Film e Serie Tv del momento</h2>
          <Swiper
            grabCursor={true}
            slidesPerView={"auto"}
            spaceBetween={10}
            freeMode={true}
          >
            {popularData?.results?.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard
                  title={item.title || item.name}
                  poster={item.poster_path}
                  release={item.release_date || item.first_air_date}
                  rating={item.vote_average}
                  id={item.id}
                  type={item.title ? "movie" : "tv"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="now-playing">
          <h2>I film più votati</h2>
          <Swiper
            grabCursor={true}
            slidesPerView={"auto"}
            spaceBetween={10}
            freeMode={true}
          >
            {topRatedData?.results?.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard
                  title={item.title}
                  poster={item.poster_path}
                  release={item.release_date}
                  rating={item.vote_average}
                  id={item.id}
                  type={item.title ? "movie" : "tv"}
                  key={item.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MovieList>
  );
};

const MovieList = styled.div`
  .swiper-wrapper {
    margin: 1rem;
    .swiper-slide {
      width: auto;
    }
  }
`;

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
