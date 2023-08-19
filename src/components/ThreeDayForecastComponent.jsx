// ThreeDayForecastComponent.js
import React from 'react';

const ThreeDayForecastComponent = ({ forecastData }) => {
  return (
    <div>
      <h2>3-Day Weather Forecast</h2>
      {forecastData.map((day, index) => (
        <div key={index}>
          <h3>{day.date}</h3>
          <p>Condition: {day.day.condition.text}</p>
          <p>Max Temperature: {day.day.maxtemp_c}°C / {day.day.maxtemp_f}°F</p>
          <p>Min Temperature: {day.day.mintemp_c}°C / {day.day.mintemp_f}°F</p>
        </div>
      ))}
    </div>
  );
};

export default ThreeDayForecastComponent;
