import React from 'react'
import WeatherTemperatureComponent from './WeatherTemperatureComponent';
import { useWeather } from '../provider/showeather_provider';
import { useCity } from '../provider/city_provider';


const OneDayWeatherDetails = () => {
  const { showWeather } = useWeather();
  const { city } = useCity();
  return (
    <div>{showWeather && <WeatherTemperatureComponent city={city} />}</div>
  )
}

export default OneDayWeatherDetails