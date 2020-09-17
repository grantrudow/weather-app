import React, {useEffect} from 'react';
import './MobileHome.css';

// Components
import MobileHero from '../MobileHero/MobileHero';

function MobileHome({getLocationWeather}) {

	useEffect(() => {
		// Sets default location to Boston, MA
		let city = 'Boston';
		let state = 'MA';
		let country = 'US';

		getLocationWeather(city, state, country);
	}, [])
	
	return (
		<div className="mobileHome">
			<MobileHero />
		</div>
	)
}

export default MobileHome
