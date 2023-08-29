import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { WeatherProvider } from "./provider/showeather_provider";
import OneDayWeatherDetails from "./components/OneDayWeatherDetails";
import { CityProvider } from "./provider/city_provider";
import WeatherTemperatureComponent from "./components/WeatherTemperatureComponent";
import { WeatherDataProvider } from "../src/provider/WeatherDataProvider";

const App = () => (
  <WeatherProvider>
    <CityProvider>
      <WeatherDataProvider>
        <BrowserRouter basename="/lookatweather">
          <Routes>
            <Route path="/lookatweather" element={<HomePage />} />
            <Route path="/weatherdetail" element={<OneDayWeatherDetails />} />
          </Routes>
        </BrowserRouter>
      </WeatherDataProvider>
    </CityProvider>
  </WeatherProvider>
);

export default App;
