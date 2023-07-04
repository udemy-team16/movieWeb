import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const MovieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    updateMoviestore: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateMoviestore } = MovieSlice.actions;
export default MovieSlice.reducer;
