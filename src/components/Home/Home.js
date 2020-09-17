import React, { useEffect } from 'react';
import './Home.css';
import { useStateValue } from '../../StateProvider';


// Components
import WeatherCard from '../WeatherCard/WeatherCard';
import SearchBar from '../SearchBar/SearchBar';
import HeroDisplay from '../HeroDisplay/HeroDisplay';

function Home({getLocationWeather}) {
	const [{weather}, dispatch] = useStateValue();	

	useEffect(() => {
		// Sets default location to Boston, MA
		let city = 'Boston';
		let state = 'MA';
		let country = 'US';

		getLocationWeather(city, state, country);
	}, [])

	return (
		<div className="home grid">
			<div className="home__left">
        		<HeroDisplay />
      		</div>
			<div className="home__right">
        		<SearchBar getLocationWeather={getLocationWeather}/>
				<div className="home__presets">
					<h4 onClick={() => getLocationWeather('Boston', 'MA', 'US')}>Boston</h4>
					<h4 onClick={() => getLocationWeather('New York', 'NY', 'US')}>New York</h4>
					<h4 onClick={() => getLocationWeather('London', 'Uk')}>London</h4>
					<h4 onClick={() => getLocationWeather('Atlanta', 'GA', 'US')}>Atlanta</h4>
				</div>
				<div className="home__weatherDetails">
					<WeatherCard />				
				</div>
      		</div>
		</div>
	)
}

export default Home;
