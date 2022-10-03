import React, { Fragment, useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCity(response.data.name);
  }

  function requestData(name) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ad08724a8362612bf966360e7b25eb54&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    requestData(event.target.cityName.value);
  }

  return (
    <div className="Search">
      <h1>Weather Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="cityName"
          type="search"
          placeholder="Enter a city"
          autoComplete="off"
        />
        <input type="submit" value="Search" />
      </form>
      <ul className="list">
        {city && (
          <Fragment>
            <li>temperature: {Math.round(temperature)} C</li>
            <li>description: {description}</li>
            <li>humidity: {humidity} %</li>
            <li>wind: {wind} km/h</li>
          </Fragment>
        )}
      </ul>
    </div>
  );
}
