import React, { useState, useEffect } from "react";
import "./App.css";
import { filterForecast } from "./utils/index";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

const App = () => {
  const id = process.env.REACT_APP_MY_API_ID;

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Prague');
  const [forecasts, setForecasts] = useState(null);

  const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${id}`)
      .then(response => response.json())
      .then(json => setWeather(json))
  }

  const getForecast = (city) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        process.env.REACT_APP_MY_API_ID
    )
      .then((response) => response.json())
      .then((data) => {
        setForecasts(filterForecast(data.list));
      });
  };

  useEffect(() => {
    // eslint-disable-next-line
    fetchWeather(city);
        // eslint-disable-next-line
    getForecast(city);
    // eslint-disable-next-line
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="button-group">
            <button className="button" onClick = { () => setCity('Prague')}>Prague</button>
            <button className="button" onClick = { () => setCity('Buenos Aires')}>Buenos Aires</button>
            <button className="button" onClick = { () => setCity('Lisabon')}>Lisabon</button>
        </div>
        <div className="weather">
          <Weather weather={weather} city={city}/>
          <div className="weather__forecast" id="predpoved">
            {forecasts?.map((forecast, index) => (
              <Forecast key={index} forecast={forecast} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
