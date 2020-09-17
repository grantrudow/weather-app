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
          <h4>Cloudy</h4>
          <h4>Humidity</h4>
          <h4>Wind</h4>
        </div>
        <div className="weatherCard__results">
          <h4>84%</h4>
          <h4>25%</h4>
          <h4>25mph</h4>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard;
