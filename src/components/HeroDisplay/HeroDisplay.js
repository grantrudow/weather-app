import React from 'react';
import './HeroDisplay.css';
import { useStateValue } from '../../StateProvider';
import { getFahrenheit, getCelsius } from '../../reducer';

function HeroDisplay() {
    const [{currentWeather}, dispatch] =useStateValue();

    return (
        <div className="heroDisplay">
            <div className="spacer"></div>
            <div className="heroDisplay__content grid">
                <h1>{`${getFahrenheit(currentWeather.currentTemp)}ºF`}</h1>
                <div className="heroDisplay__locTime">
                    <h1>{currentWeather.city}</h1>
                    <p>{currentWeather.currentDate}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroDisplay;