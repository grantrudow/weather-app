import React from 'react';
import './WeatherCard.css';
import { useStateValue } from '../../StateProvider';
import { getFahrenheit, getCelsius } from '../../reducer';

function WeatherCard() {
  const [{currentWeather}, dispatch] = useStateValue();

  return (
    <div className="weatherCard grid">
      <h4>Weather Details</h4>

      <div className="weatherCard__details">
        <div className="weatherCard__headers">
          <h4>Today's Forecast</h4>
          <h4>Feels Like</h4>
          <h4>Actual</h4>
          <h4>Humidity</h4>
          <h4>Wind Speed</h4>
        </div>
        <div className="weatherCard__results">
          <h4>{currentWeather.currentDescription}</h4>
          <h4>{`${getFahrenheit(currentWeather.currentTemp)} ºF`}</h4>
          <h4>{`${getFahrenheit(currentWeather.currentTemp)} ºF`}</h4>
          <h4>{currentWeather.currentHumidity} %</h4>
          <h4>{currentWeather.currentWindSpeed} mph</h4>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard;
