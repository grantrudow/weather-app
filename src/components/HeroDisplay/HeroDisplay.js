import React from 'react';
import './HeroDisplay.css';
import { useStateValue } from '../../StateProvider';
import { getFahrenheit, getCelsius } from '../../reducer';

function HeroDisplay() {
    const [{weather}, dispatch] =useStateValue();

    return (
        <div className="heroDisplay">
            <div className="spacer"></div>
            <div className="heroDisplay__content grid">
                <h1>{`${getFahrenheit(weather.currentTemp)}ºF`}</h1>
                <div className="heroDisplay__locTime">
                    <h1>{weather.city}</h1>
                    <p>06:09 - Monday, 9 Sept '19</p>
                </div>
            </div>
        </div>
    )
}

export default HeroDisplay;