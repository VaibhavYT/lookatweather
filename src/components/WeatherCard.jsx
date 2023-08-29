import React from "react";
import sunCloud from "../images/cl_3.png";
import ThunderCloud from "../images/cl_2.png";
import Clouds from "../images/cl_1.png";
import RainCloud from "../images/cl_5.png";
import WeatherCardComponent from "./WeatherCardComponent";
import WeatherCardComponent2 from "./WeatherCardComponent2";
const WeatherCard = () => {
  return (
    <div className="flex flex-row rounded-xl">
      <WeatherCardComponent image={sunCloud} />
      <WeatherCardComponent image={Clouds} />
      <WeatherCardComponent image={RainCloud} />
      <WeatherCardComponent image={ThunderCloud} />
      <WeatherCardComponent2 />
    </div>
  );
};

export default WeatherCard;
