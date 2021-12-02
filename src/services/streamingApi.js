import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://streaming-availability.p.rapidapi.com";

const streamingApiHeaders = {
  "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_STREAMING_API,
};

const createRequest = (url) => ({ url, headers: streamingApiHeaders });

export const streamingApi = createApi({
  reducerPath: "streamingApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAvailability: builder.query({
      query: (type_id) =>
        createRequest(
          `/get/basic?country=it&tmdb_id=${type_id}&output_language=en`
        ),
    }),
  }),
});

export const { useGetAvailabilityQuery } = streamingApi;
