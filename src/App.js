import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { API_KEY } from "./config";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        setError("City not found.");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch {
      setError("Failed to fetch weather.");
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1 className="title">Weather App</h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <p className="info-msg">Loading...</p>}
      {error && <p className="error-msg">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
