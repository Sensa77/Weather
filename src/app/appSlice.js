import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCity, getGeo } from "../utils/api";

let initialState = {
  city: "Москва",
  temperature: 0,
  characteristics: [],
  status: "no-status",
  error: null,
  geo: {},
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

export const getGeolocation = createAsyncThunk("getGeolocation", async () => {
  try {
    const response = await fetch(getGeo());
    const geo = await response.json();
    return geo;
  } finally {
  }
});

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
    [getGeolocation.pending]: (state) => {
      state.status = "loading";
    },
    [getGeolocation.fulfilled]: (state, action) => {
      state.geo = action.payload;
      state.city = action.payload.city;
    },
    [getGeolocation.rejected]: (state) => {},
  },
});

export const { changeCity, changeTemperature } = appSlice.actions;
export const geoSelector = (state) => state.app.geo;
export const errorSelector = (state) => state.app.error;
export const statusSelector = (state) => state.app.status;
export const temperatureSelector = (state) => state.app.temperature;
export const characteristicsSelector = (state) => state.app.characteristics;
export const citySelector = (state) => state.app.city;
export default appSlice.reducer;
