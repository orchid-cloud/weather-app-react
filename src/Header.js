import React from "react";
import WeatherConvert from "./WeatherConvert";

import "./Header.css";

export default function Header({
  city,
  temp,
  desc,
  humidity,
  wind,
  feelsLike,
  icon,
}) {
  let date = new Date();
  let day = date.getDate();

  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Now",
    "Dec",
  ];
  let month = months[date.getMonth()];

  let year = date.getFullYear();

  let hour = `0${date.getHours()}`.slice(-2);

  let minutes = `0${date.getMinutes()}`.slice(-2);

  let today = `${day} ${month} ${year} ${hour}:${minutes}`;

  let iconPath = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="Header main">
      <section className=" header">
        <div className="card">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{today}</h6>
            <p className="card-text">{city}</p>
            <p className="description">{desc}</p>
            <div className="temperature-box">
              <WeatherConvert celsius={Math.round(temp)} />
            </div>
          </div>
        </div>
        <div className="header__img">
          <img src={iconPath} alt={desc} />
        </div>
        <div className="details">
          <p>
            Feels like: <span></span>
            {feelsLike}°C
          </p>
          <p>
            Humidity: <span></span>
            {humidity}%
          </p>
          <p>
            Wind: <span></span>
            {wind}km/h
          </p>
        </div>
      </section>
    </div>
  );
}
