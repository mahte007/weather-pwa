import React from "react";

const ForecastCard = (props) => {

    let time = new Date(props.forecastElement.dt * 1000);
    let hours = time.getHours();
    let minutes = "0" + time.getMinutes();
    let formattedTime = hours + ':' + minutes.substring(-2);

    console.log(formattedTime)


    return (

        <div className="forecast-card" key={props.forecastElement.dt}>
            {formattedTime}
            <img className="" src={'https://openweathermap.org/img/wn/' + props.forecastElement.weather[0].icon + '@2x.png'} alt={props.forecastElement.weather[0].description} />
            {Math.round(props.forecastElement.main.temp)}
        </div>
    )
}

export default ForecastCard;