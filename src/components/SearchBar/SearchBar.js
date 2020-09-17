import React, { useState, useEffect } from 'react';
import './SearchBar.css'
import { useStateValue } from '../../StateProvider';
import axios from '../../axios'

// Icons
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
	const [{location, weather}, dispatch] = useStateValue();
	const [searchText, setSearchText] = useState();
	const weatherApi ='ed8879c76ac5097000f1c6a9159c4e7f';

	function calculateTemperatureFahrenheight(temp) {
		return ((temp)); 273.15; 9 / 5 + 32;;
	}

	const setLocation = () => {
		if (searchText != null) {
			let text = searchText.split(',')
			let city = text[0]
			let state = text[1]
			let country = text[3]

			const getLocationWeather = async () => {
				const response = await axios({
				  method: 'get',
				  url: `/forecast?q=${city},${state},${country}&appid=${weatherApi}`
				})
				const data = response.data;


				dispatch({
					type: 'SET_WEATHER_DATA',
					item: {
						city: data.city.name,
						country: data.city.country,
						timezone: data.city.timezone,
						sunrise: data.city.sunrise,
						sunset: data.city.sunset,
						weatherForecast: data.list,
						currentWeatherF: calculateTemperatureFahrenheight()
					}
				})
			  }
			
			getLocationWeather();

			dispatch({
				type: 'SET_LOCATION',
				item: {
					status: true,
					city: city,
					state: state,
					country: country
				}
			})
		}
	}


	return (
		<div className="searchBar grid">
			<input 
			type="text" 
			placeholder="Ex: Oxford, MS, US" 
			onChange={event => setSearchText(event.target.value)}
			/>
			<button type="submit" onClick={setLocation}>
				<SearchIcon style={{ fontSize: 40 }}/>
			</button>
		</div>
	)
}

export default SearchBar;
