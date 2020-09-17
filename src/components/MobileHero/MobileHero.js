import React from 'react'
import './MobileHero.css';
import { useStateValue } from '../../StateProvider';
import { getFahrenheit, getCelsius } from '../../reducer';

function MobileHero() {
	const [{weather}, dispatch] =useStateValue();

	return (
		<div className="mobileHero grid">
			<div className="mobileHero__content grid">
				<h1>{`${getFahrenheit(weather.currentTemp)}ºF`}</h1>
				<div className="mobileHero__locTime">
					<h1>{weather.city}</h1>
					<p>06:09 - Monday, 9 Sept '19</p>
				</div>
			</div>
		</div>
	)
}

export default MobileHero;
