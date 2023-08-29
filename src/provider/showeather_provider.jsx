import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [showWeather, setShowWeather] = useState(false);

  return (
    <WeatherContext.Provider value={{ showWeather, setShowWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
