import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCity } from "../utils/api";

let initialState = {
  city: "Краснодар",
  temperature: 0,
  characteristics: [],
  status: "no-status",
};

export const getWeatherData = createAsyncThunk(
  "getWeatherData",
  async (data, { getState }) => {
    try {
      const city = getState().app.city;
      const characteristics = await fetch(getCity(city))
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data;
        });
      return characteristics;
    } finally {
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    getTemperature: (state, action) => {
      state.temperature = action.payload;
    },
  },
  extraReducers: {
    [getWeatherData.pending]: (state) => {
      state.status = "loading";
    },
    [getWeatherData.fulfilled]: (state, action) => {
      state.status = "done";
      state.characteristics = action.payload;
    },
    [getWeatherData.re]: (state) => {
      state.status = "error";
    },
  },
});

export const { changeCity, changeTemperature } = appSlice.actions;
export const temperatureSelector = (state) => state.app.temperature;
export const characteristicsSelector = (state) => state.app.characteristics;
export const citySelector = (state) => state.app.city;
export default appSlice.reducer;
