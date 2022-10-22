import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Input from "./Input";
import WeatherForecast from "./WeatherForecast";

export default function DataStorage(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [temperature, setTemperature] = useState("t");
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [icon, setIcon] = useState("02d");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  function handleData(data) {
    setCity(data.data.name);
    setTemperature(Math.round(data.data.main.temp));
    setDescription(data.data.weather[0].description);
    setFeelsLike(Math.round(data.data.main.feels_like));
    setHumidity(data.data.main.humidity);
    setWind(data.data.wind.speed);
    setIcon(data.data.weather[0].icon);
    setLongitude(data.data.coord.lon);
    setLatitude(data.data.coord.lat);
    console.log(data.data.coord);
  }

  function requestData(response) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${response}&appid=6438ebf906174a5606ff8d953442b1a6&units=metric`;
    axios.get(url).then(handleData);
  }
  function handleSubmit(event) {
    event.preventDefault();

    requestData(event.target.cityName.value);
  }

  if (latitude) {
    return (
      <>
        <Header
          city={city}
          temp={temperature}
          desc={description}
          humidity={humidity}
          wind={wind}
          feelsLike={feelsLike}
          icon={icon}
        />
        <Input handleSubmit={handleSubmit} />
        <WeatherForecast
          key={`${longitude}-${latitude}`}
          longitude={longitude}
          latitude={latitude}
        />
      </>
    );
  } else {
    requestData(props.defaultCity);
    return "Loading...";
  }
}
