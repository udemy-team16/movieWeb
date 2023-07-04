import { configureStore } from "@reduxjs/toolkit";
import MovieStore from "./MovieStore";

const store = configureStore({
  reducer: {
    movies: MovieStore,
  },
});

export default store;
