import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import MovieStore from "../redux/MoviesStore";

const storedState = localStorage.getItem("reduxState");
const preloadedState = storedState ? JSON.parse(storedState) : {};

const store = configureStore({
  reducer: {
    MovieStore: MovieStore,
  },
  preloadedState: preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("reduxState", JSON.stringify(state));
});

export default store;
