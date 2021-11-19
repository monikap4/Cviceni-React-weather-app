import React from "react";
import { getDayfromUnix } from './../../utils/index';

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      <div className="forecast__day">
        {forecast && getDayfromUnix(forecast.dt)}
      </div>
      <div className="forecast__icon">
        {forecast && (
          <img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            style={{ height: "100%" }}
            alt="current weather icon"
          />
        )}
      </div>
      <div className="forecast__temp">
        {forecast && Math.round(forecast.main.temp)} °C
      </div>
    </div>
  );
};

export default Forecast;