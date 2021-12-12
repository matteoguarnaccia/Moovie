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
import HeroSlide from "./HeroSlide";

const Homepage = () => {
  const { data: popularData, isFetching: popularIsFetching } =
    useGetPopularQuery();
  const { data: topRatedData, isFetching: topRatedIsFetching } =
    useGetTopRatedMoviesQuery();
  //console.log(popularData);
  console.log(popularData);

  if (popularIsFetching || topRatedIsFetching) return "Loading...";
  SwiperCore.use([FreeMode]);
  const HeroData = popularData?.results?.slice(0, 4);
  return (
    <StyledHomePage>
      <HeroSlide data={HeroData} />
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
    </StyledHomePage>
  );
};
const StyledHomePage = styled.div`
  margin-top: -10%;
  .popular {
    margin-top: 1rem;
  }
`;

const MovieList = styled.div`
  .swiper-wrapper {
    margin: 1rem;
    .swiper-slide {
      width: auto;
    }
  }
`;

export default Homepage;
