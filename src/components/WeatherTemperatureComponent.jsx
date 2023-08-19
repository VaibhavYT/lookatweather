// WeatherTemperatureComponent.js

import React, { useState, useEffect } from 'react';
import { fetchThreeDayForecast, fetchWeatherData } from '../utils/weatherapi';
import ThreeDayForecastComponent from './ThreeDayForecastComponent';
const WeatherTemperatureComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);

        const forecast = await fetchThreeDayForecast(city);
        setForecastData(forecast);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather Details for {city}</h2>
          <p>Location: {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</p>
          <p>Temperature: {weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
          {/* Add more details here */}
        </div>
      )}
      {forecastData.length > 0 && (
        <ThreeDayForecastComponent forecastData={forecastData} />
      )}
    </div>
  );
};

export default WeatherTemperatureComponent;
