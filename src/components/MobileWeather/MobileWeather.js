import React from 'react';
import './MobileWeather.css';
import {useStateValue} from '../../StateProvider';

function MobileWeather() {
    const [{currentWeather}, dispatch] = useStateValue();

    return (
        <div className="mobileWeather grid">
            <h4>Weather Details</h4>

            <div className="mobileWeather__details">
                <div className="mobileWeather__headers">
                    <h4>Cloud Coverage</h4>
                    <h4>Humidity</h4>
                    <h4>Wind</h4>
                </div>
                <div className="mobileWeather__results">
                    <h4> %</h4>
                    <h4> %</h4>
                    <h4> mph</h4>
                </div>
            </div>
        </div>
    )
}

export default MobileWeather;
