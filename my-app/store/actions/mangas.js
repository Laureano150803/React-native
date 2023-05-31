/* import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../api.js";
import axios from "axios";

export const read_mangas = createAsyncThunk("read_mangas", async () => {
  try {
    let res = await axios.get('https://minga-rojo-back-ibo0.onrender.com/mangas');
    return {
      mangas: {res},
    };
  } catch (error) {
    return {
      mangas: [],
    };
  }
}); */