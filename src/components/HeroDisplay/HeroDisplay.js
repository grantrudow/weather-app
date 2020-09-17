import React from 'react';
import './HeroDisplay.css';
import { useStateValue } from '../../StateProvider';

function HeroDisplay() {
    const [{location, weather}, dispatch] =useStateValue();
    console.log(location.city)

    return (
        <div className="heroDisplay">
            <div className="spacer"></div>
            <div className="heroDisplay__content grid">
                <h1>16ºF</h1>
                <div className="heroDisplay__locTime">
                    <h1>{location.city ? location.city : 'Boston'}</h1>
                    <p>06:09 - Monday, 9 Sept '19</p>
                </div>
            </div>
        </div>
    )
}

export default HeroDisplay;