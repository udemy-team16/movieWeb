import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const MovieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    updateMoviestore: (state, action) => {
      return (state = {
        ...state,
        ...action.payload,
      });
    },
  },
});

export const { updateMoviestore } = MovieSlice.actions;
export default MovieSlice.reducer;

// toolkit
