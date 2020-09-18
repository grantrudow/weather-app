import React, {useEffect} from 'react';
import './MobileHome.css';

// Components
import MobileHero from '../MobileHero/MobileHero';
import MobileWeather from '../MobileWeather/MobileWeather';
import MobileSearch from '../MobileSearch/MobileSearch';

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
			<MobileSearch getLocationWeather={getLocationWeather}/>
			<MobileWeather />
		</div>
	)
}

export default MobileHome
