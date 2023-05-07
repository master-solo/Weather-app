import { useState } from "react";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/currentWeather/currentWeather";
import Context from "./contex";

const App = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState({
    name: "",
    weather: "",
    icon: "",
    temp: "",
    feel: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    wind: "",
    pressure: "",
  });

  return (
    <Context.Provider value={{ name, setName, data, setData }}>
      <div className="container">
        <Search />
        <CurrentWeather />
      </div>
    </Context.Provider>
  );
};

export default App;
