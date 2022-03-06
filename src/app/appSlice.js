import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCity } from "../utils/api";

let initialState = {
  city: "Краснодар",
  temperature: 0,
  characteristics: [],
  status: "no-status",
  error: null,
};

export const getWeatherData = createAsyncThunk(
  "getWeatherData",
  async (data, { getState, rejectWithValue }) => {
    try {
      const city = getState().app.city;
      const response = await fetch(getCity(city));
      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }
      const characteristics = await response.json();
      return characteristics;
    } catch (err) {}
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
    [getWeatherData.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const { changeCity, changeTemperature } = appSlice.actions;
export const errorSelector = (state) => state.app.error;
export const statusSelector = (state) => state.app.status;
export const temperatureSelector = (state) => state.app.temperature;
export const characteristicsSelector = (state) => state.app.characteristics;
export const citySelector = (state) => state.app.city;
export default appSlice.reducer;
