import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.themoviedb.org/3";

const api_key = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: () => `/trending/all/day?api_key=${api_key}&language=it-IT`,
    }),
    getTopRatedMovies: builder.query({
      query: () =>
        `/movie/top_rated?api_key=${api_key}&language=it-IT&region=IT&page=1`,
    }),
    getDetails: builder.query({
      query: (type_id) => `${type_id}?api_key=${api_key}&language=it-IT`,
    }),
    getSearch: builder.query({
      query: (string) =>
        `/search/multi?api_key=${api_key}&language=it-IT&query=${string}&page=1&include_adult=false`,
    }),
    getCast: builder.query({
      query: (type_id) =>
        `${type_id}/credits?api_key=${api_key}&language=it-IT`,
    }),
    getProviders: builder.query({
      query: (type_id) => `${type_id}/watch/providers?api_key=${api_key}`,
    }),
  }),
});

export const {
  useGetPopularQuery,
  useGetTopRatedMoviesQuery,
  useGetDetailsQuery,
  useGetSearchQuery,
  useGetCastQuery,
  useGetProvidersQuery,
} = tmdbApi;
