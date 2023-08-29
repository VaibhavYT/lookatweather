import React, { useEffect } from "react";

import {  fetchWeatherData } from "../utils/weatherapi";
// import ThreeDayForecastComponent from "./ThreeDayForecastComponent";
import WeatherCard from "./WeatherCard";
import sunImage from "../images/sun.png";
import { useWeatherData } from "../provider/WeatherDataProvider";

const WeatherTemperatureComponent = ({ city }) => {
  const getCurrentDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay(); // Returns a value from 0 (Sunday) to 6 (Saturday)
    return days[currentDayIndex];
  };

  const { weatherData, setWeatherData } = useWeatherData();

  // const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);

        // const forecast = await fetchThreeDayForecast(city);
        // setForecastData(forecast);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [city, setWeatherData]);

  return (
    <div className="h-screen p-8 m-0 text-white bg-gradient-to-br from-[#509fb0] via-[#53abbb] to-[#54cdad] flex flex-col items-center ">
      {
        <div className="">
          <h1 className="items-center justify-center pb-8 text-5xl text-center">
            Weather Template
          </h1>

          <div className="flex gap-6 pb-4">
            <div className="bg-[#A8DFFB33] w-96 h-72 p-4 rounded-xl">
              <h1 className="mb-4 font-bold text-center">
                Local Weather Report
              </h1>
              <hr className="pt-3 gap-y-1" />

              <div className="flex flex-row">
                <div>
                  <img src={sunImage} alt="sun" className="h-40 p-6 w-fit" />
                  {weatherData && weatherData.current && (
                    <p className="text-xl text-center">
                     {weatherData.current.wind_kph} KM/H
                    </p>
                  )}
                </div>

                <div className="flex flex-col ">
                  <p className="pt-4 pb-1 text-2xl text-center px-14 gap-x-6">
                    {getCurrentDay()}
                  </p>

                  {weatherData && weatherData.current && (
                    <p className="text-base text-center">
                      {weatherData.current.condition.text}
                    </p>
                  )}
                  {weatherData && (
                    <div className="pt-16 ">
                      <p className="text-xl text-center ">
                        {weatherData.current.temp_c}°C
                      </p>

                      <p className="text-xl text-center">
                        {weatherData.current.temp_f}°F
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-[#A8DFFB33] w-96 h-72 p-4 rounded-xl">
              <h1 className="mb-4 font-bold text-center">
                Sea Forecast Report
              </h1>
              <hr className="pt-3 font-bold gap-y-1" />
              
              {weatherData && weatherData.current && (
                    <div>
                      <p className="text-center ">
                Wind Speed....................................................................{weatherData.current.wind_kph}
                    </p>
                    <p className="text-center ">
                Gust_kph..........................................................................{weatherData.current.gust_kph}
                    </p>
                    <p className="text-center ">
                    Wind_degree..................................................................{weatherData.current.wind_degree}
                    </p>
                    <p className="text-center ">
                    Wind_dir.........................................................................{weatherData.current.wind_dir}
                    </p>
                    <p className="text-center ">
                    Humidity............................................................................{weatherData.current.humidity}
                    </p>
                    <p className="text-center ">
                    Feelslike_c........................................................................{weatherData.current.feelslike_c}
                    </p>
                    <p className="text-center ">
                    UV...........................................................................................{weatherData.current.uv}
                    </p>
                    <p className="text-center ">
                    Is_day....................................................................................{weatherData.current.is_day}
                    </p>
                    <p className="text-center ">
                    Precip_in.............................................................................{weatherData.current.precip_in}
                    </p>
                    
                    
                    </div>
                    
                  )}
                  
               {/* {forecastData.length > 0 && (
            <ThreeDayForecastComponent forecastData={forecastData} />
          )}  */}
            </div>
           
          </div>

          <WeatherCard />
        </div>
      }
    </div>
  );
};

export default WeatherTemperatureComponent;