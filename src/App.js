import React, { useState } from "react";
import { fetchWeatherByName, fetchWeatherByCoords, fetchForecastByCoords, fetchForecastByName } from "./api/fetchWeather";
import './styles.css'
import ForecastCard from "./components/ForecastCard";

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({})

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeatherByName(query);
      const forecastData = await fetchForecastByName(query);
      console.log(data)
      console.log(forecastData)

      setWeather(data);
      setWeatherForecast(forecastData)
      setQuery('');
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const getLocation = () => {
      navigator.geolocation.getCurrentPosition(async position => {
  
        const data = await fetchWeatherByCoords({
          lon: position.coords.longitude,
          lat: position.coords.latitude
        });

        const forecastData = await fetchForecastByCoords({
          lon: position.coords.longitude,
          lat: position.coords.latitude
        });
  
        setWeatherForecast(forecastData)
        setWeather(data);
      })

  }


  return (
    <div className="main-container">
      <input 
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          onKeyDown={search}
      />

      <input 
          type="button"
          className="search"
          value="Use my location!"
          onClick={getLocation}
      />
      
      
      <div className="weather-container">
        {weather.main && (
          <div className="city-container">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img className="city-icon" src={'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'} alt={weather.weather[0].description} />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}

        {weatherForecast.list && (
          <div className="forecast-container">
            {
              weatherForecast.list.map((forecast) => {
                console.log(forecast)
                return <ForecastCard forecastElement={forecast} />
              })
            }
          </div>
        )}
      </div>

    </div>
    
  );
}

export default App;
