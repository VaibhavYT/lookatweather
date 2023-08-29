import React from "react";
import WinterCloud from "../images/cl_4.png";
import { useWeatherData } from "../provider/WeatherDataProvider";
const WeatherCardComponent2 = () => {
  const {weatherData} = useWeatherData();
  return (
    <div className="bg-[#A8DFFB33] max-w-fit h-72 p-4 flex flex-row">
      <div>
        <h1 className="mb-4 text-center">Monday</h1>

        <img src={WinterCloud} alt="sun" className="h-32 pb-6 pr-6 " />
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
      {/* <div className="w-px h-full bg-white mx-0.5" /> */}
    </div>
  );
};

export default WeatherCardComponent2;
