import React from "react";
import { Link } from "react-router-dom";
import { useWeather } from '../provider/showeather_provider';
import { useCity } from '../provider/city_provider';

const HomePage = () => {
  const { setShowWeather } = useWeather();
  const { city, setCity } = useCity();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    setShowWeather(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-200 to-blue-400">
      <h1 className="mb-8 text-4xl font-extrabold text-red-500 md:text-6xl animate-bounce">
        Weather App
      </h1>
      <div className="flex flex-col items-center md:flex-row md:space-x-4">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a city"
          className="px-4 py-2 text-gray-700 border-t border-b border-l rounded-l-lg focus:outline-none focus:border-blue-400"
        />
        <Link to="/weatherdetail">
          <button
            onClick={handleSearch}
            className="px-6 py-2 mt-2 text-white transition duration-300 ease-in-out rounded-r-lg md:mt-0 bg-lime-400 hover:bg-lime-500"
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
