import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5780d186a5ff17ade8694ed351c9631d";

const FORECASTURL = "https://api.openweathermap.org/data/2.5/forecast"

export const fetchWeatherByName = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appid: API_KEY,
        }
    });

    return data;
}

export const fetchWeatherByCoords = async (coords) => {
    const { data } = await axios.get(URL, {
        params: {
            lat: coords.lat,
            lon: coords.lon,
            units: 'metric',
            appid: API_KEY
        }
    })

    return data;
}

export const fetchForecastByName = async (query) => {
    const { data } = await axios.get(FORECASTURL, {
        params: {
            q: query,
            units: 'metric',
            cnt: 8,
            appid: API_KEY,
        }
    });

    return data;
}

export const fetchForecastByCoords = async (coords) => {
    const { data } = await axios.get(FORECASTURL, {
        params: {
            lat: coords.lat,
            lon: coords.lon,
            units: 'metric',
            cnt: 8,
            appid: API_KEY
        }
    })

    return data;
}