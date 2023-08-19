// api.js
import axios from 'axios';

const API_KEY = 'f37e13f444msh3b3d19ec11b5965p1698e5jsn8e905791f299'; // Replace with your actual API key

export const fetchWeatherData = async (city) => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchThreeDayForecast = async (city) => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
      q: city,
      days: 3,
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const forecastData = response.data.forecast.forecastday; // Assuming the data structure matches
    return forecastData;
  } catch (error) {
    throw error;
  }
};

