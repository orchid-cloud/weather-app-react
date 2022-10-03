import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Input from "./Input";

export default function DataStorage() {
  const [city, setCity] = useState("Cityname");
  const [temperature, setTemperature] = useState("t");
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [icon, setIcon] = useState("02d");

  function handleData(data) {
    setCity(data.data.name);
    setTemperature(Math.round(data.data.main.temp));
    setDescription(data.data.weather[0].description);
    setFeelsLike(Math.round(data.data.main.feels_like));
    setHumidity(data.data.main.humidity);
    setWind(data.data.wind.speed);
    setIcon(data.data.weather[0].icon);
  }

  function requestData(response) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${response}&appid=ad08724a8362612bf966360e7b25eb54&units=metric`;
    axios.get(url).then(handleData);
  }
  function handleSubmit(event) {
    event.preventDefault();

    requestData(event.target.cityName.value);
  }

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
    </>
  );
}
