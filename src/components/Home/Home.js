import React, { useEffect } from 'react';
import './Home.css';
import { useStateValue } from '../../StateProvider';

// Components
import WeatherCard from '../WeatherCard/WeatherCard';
import SearchBar from '../SearchBar/SearchBar';
import HeroDisplay from '../HeroDisplay/HeroDisplay';

function Home() {
	const [{location, weather}, dispatch] = useStateValue();

	return (
		<div className="home grid">
			<div className="home__left">
        		<HeroDisplay />
      		</div>
			<div className="home__right">
        		<SearchBar />
				<div className="home__presets">
					<h4>Boston</h4>
					<h4>New York</h4>
					<h4>Atlanta</h4>
					<h4>London</h4>
				</div>
				<div className="home__weatherDetails">
					<WeatherCard />				
				</div>
      		</div>
		</div>
	)
}

export default Home;
