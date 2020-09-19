import React from 'react'
import './MobileHero.css';
import { useStateValue } from '../../StateProvider';
import { getFahrenheit, getCelsius } from '../../reducer';

function MobileHero() {
	const [{currentWeather}, dispatch] =useStateValue();

	return (
		<div className="mobileHero grid">
			<div className="mobileHero__content grid">
				<h1>{`${getFahrenheit(currentWeather.currentTemp)}ºF`}</h1>
				<div className="mobileHero__locTime">
					<h1>{currentWeather.city}</h1>
					<p>{currentWeather.currentDate}</p>
				</div>
			</div>
		</div>
	)
}

export default MobileHero;
