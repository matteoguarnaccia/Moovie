import { configureStore } from "@reduxjs/toolkit";

import { tmdbApi } from "../services/tmdbApi";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
