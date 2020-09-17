import React from 'react';
import './WeatherCard.css';
import { useStateValue } from '../../StateProvider';

function WeatherCard() {
  const [{location, weather}, dispatch] = useStateValue();

  return (
    <div className="weatherCard grid">
      <h4>Weather Details</h4>

      <div className="weatherCard__details">
        <div className="weatherCard__headers">
          <h4>Cloud Coverage</h4>
          <h4>Humidity</h4>
          <h4>Wind</h4>
        </div>
        <div className="weatherCard__results">
          <h4>{weather.cloudCoverage} %</h4>
          <h4>{weather.humidity} %</h4>
          <h4>{weather.windSpeed} mph</h4>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard;
