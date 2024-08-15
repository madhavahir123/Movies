import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Movie: JSON.parse(localStorage.getItem("favmoviedata")) ?? [],
};
console.log(initialState.Movie);

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addfavmovie(state, action) {
      state.Movie.push(action.payload);
      localStorage.setItem("favmoviedata", JSON.stringify(state.Movie));
    },
    removefavmovie(state, action) {
      state.Movie = state.Movie.filter((item) => item.id !== action.payload);
      localStorage.setItem("favmoviedata", JSON.stringify(state.Movie));
    },
  },
});

export default userslice.reducer;
export const { addfavmovie, removefavmovie } = userslice.actions;
