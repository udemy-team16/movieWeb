import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};
const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    updateMovieStore: (state, action) => {
      state.movies = action.payload
    }
  },
});

export const { updateMovieStore }  = MovieSlice.actions;
export default MovieSlice.reducer;


// toolkit