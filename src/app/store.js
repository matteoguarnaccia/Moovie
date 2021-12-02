import { configureStore } from "@reduxjs/toolkit";

import { tmdbApi } from "../services/tmdbApi";
import { streamingApi } from "../services/streamingApi";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    [streamingApi.reducerPath]: streamingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tmdbApi.middleware)
      .concat(streamingApi.middleware),
});
