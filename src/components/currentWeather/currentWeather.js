import { useContext } from "react";
import "./currentWeather.css";
import Context from "../../contex";

const CurrentWeather = () => {
  const { data } = useContext(Context);

  if (data.name === "") {
    return (
      <div>
        <h4>Find a city</h4>
      </div>
    );
  }

  return (
    <div className="current-con">
      <div className="current-weather">
        <div className="description">
          <span className="name">{data.name}</span>
          <span className="weather">{data.weather}</span>
        </div>
        <div>
          <img
            src={`./images/${data.icon}.png`}
            alt=""
            className="weather-icon"
          />
        </div>
      </div>
      <div className="tem-main">
        <div className="tem-con">
          <span className="tem">{data.temp}°C</span>
          <div className="detail-con">
            <span className="feel-like">Feel like - {data.feel}°C</span>
            <span className="hl-tem">
              {data.minTemp}°C / {data.maxTemp}°C
            </span>
          </div>
        </div>
        <div className="detail-main">
          <span className="d-title">Details</span>
          <div className="details">
            <img src="./images/humidity.png" alt="" className="d-icon h-i" />
            <span className="d-s">Humidity</span>
            <span>{data.humidity}%</span>
          </div>
          <div className="details">
            <img src="./images/wind.png" alt="" className="d-icon w-i" />
            <span className="d-s">Wind speed</span>
            <span>{data.wind} m/s</span>
          </div>
          <div className="details">
            <img src="./images/pressure.png" alt="" className="d-icon p-i" />
            <span className="d-s">Pressure</span>
            <span>{data.pressure} hps</span>
          </div>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
