function WeatherCard({ weather }) {
  const icon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2 className="city-name">{weather.name}</h2>

      <img src={iconUrl} alt="weather icon" />

      <p className="temp">{Math.round(weather.main.temp)}°C</p>

      <div className="details">
        <p>Condition: {weather.weather[0].description}</p>
        <p>Feels Like: {weather.main.feels_like}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
