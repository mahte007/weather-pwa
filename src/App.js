import React, { useState } from "react";

import { fetchWeatherByName, fetchWeatherByCoords } from "./api/fetchWeather";
import './styles.css'

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeatherByName(query);
      
      setWeather(data);
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
      
      

      {weather.main && (
        <div className="city">
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

    </div>
    
  );
}

export default App;
