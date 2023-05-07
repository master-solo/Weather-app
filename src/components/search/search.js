import "./search.css";
import Context from "../../contex";
import { useContext } from "react";

const Search = ({ onSearchChange }) => {
  const { setName, name, setData, data } = useContext(Context);
  const apiUrl = "https://api.openweathermap.org/data/2.5";
  const apiKey = "72e8bdf34bf6d59be6ca180d1d888c58";

  const handleOnSearch = () => {
    if (name === "") {
      return;
    }
    return fetch(`${apiUrl}/weather?q=${name}&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((res) =>
        setData({
          ...data,
          name: res.name,
          weather: res.weather[0].description,
          icon: res.weather[0].icon,
          temp: Math.round(res.main.temp),
          feel: Math.round(res.main.feels_like),
          maxTemp: Math.round(res.main.temp_max),
          minTemp: Math.round(res.main.temp_min),
          humidity: res.main.humidity,
          wind: Math.round(res.wind.speed),
          pressure: res.main.pressure,
        })
      )
      .then(() => setName(""))
      .catch((err) => console.error(err));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search city ...."
        className="search-bar"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img
        src="./images/search.png"
        alt=""
        className="search-icon"
        onClick={() => handleOnSearch()}
      />
    </div>
  );
};

export default Search;
