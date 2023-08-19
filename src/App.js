import React, { useState } from 'react';
import WeatherTemperatureComponent from './components/WeatherTemperatureComponent';


const App = () => {
  const [city, setCity] = useState('');
  const [showWeather, setShowWeather] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    setShowWeather(true); 
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        onKeyPress={handleKeyPress} // Call handleSearch when Enter is pressed
        placeholder="Enter a city"
      />
      <button onClick={handleSearch}>Search</button> {/* Button to trigger API call */}
      {showWeather && <WeatherTemperatureComponent city={city} />}
    </div>
  );
};

export default App;
