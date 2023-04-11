import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5780d186a5ff17ade8694ed351c9631d";

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