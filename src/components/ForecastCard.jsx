import React from "react";

const ForecastCard = (props) => {

    let time = new Date(props.forecastElement.dt * 1000);
    let hours = time.getHours();
    let minutes = "0" + time.getMinutes();
    let formattedTime = hours + ':' + minutes.substring(-2);

    console.log(formattedTime)


    return (

        <div className="forecast-card" key={props.forecastElement.dt}>
            <h3>{formattedTime}</h3>
            <img className="forecast-icon" src={'https://openweathermap.org/img/wn/' + props.forecastElement.weather[0].icon + '@2x.png'} alt={props.forecastElement.weather[0].description} />
            <h3 className="forecast-temp">
                {Math.round(props.forecastElement.main.temp)} 
                <sup>&deg;C</sup>
            </h3>
            
        </div>
    )
}

export default ForecastCard;