import React from "react";
import { useWeatherData } from "../provider/WeatherDataProvider";
const WeatherCardComponent = ({ image }) => {

const {weatherData} = useWeatherData();
  return (
    <div className="bg-[#A8DFFB33] max-w-fit h-72 p-4 flex flex-row ">
      <div>
        <h1 className="mb-4 text-center">Monday</h1>

        <img src={image} alt="sun" className="h-32 pr-6 pb-7 " />
        {weatherData && (
          <div className="">
            <p className="text-xl text-center ">
              {weatherData.current.temp_c}°C
            </p>

            <p className="text-xl text-center">
              {weatherData.current.temp_f}°F
            </p>
          </div>
        )}
      </div>
      <div className="w-px h-full bg-white" />
    </div>
  );
};

export default WeatherCardComponent;
