/* import { createReducer } from "@reduxjs/toolkit";
import { read_mangas } from "../actions/mangas.js";

const initialState = {
  mangas: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(read_mangas.fulfilled, (state, action) => {
    const newState = {
      ...state,
      mangas: action.payload.mangas,
    };
    return newState;
  });
});

export default reducer; */