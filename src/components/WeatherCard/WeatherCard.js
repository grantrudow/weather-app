import React from 'react';
import './WeatherCard.css';
import { useStateValue } from '../../StateProvider';

function WeatherCard() {
  const [{location, weather}, dispatch] = useStateValue();

  return (
      <div className="weatherCard">
        <h4>Weather Details</h4>
      </div>
  )
}

export default WeatherCard
