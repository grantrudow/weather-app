import React, { useState, useEffect } from 'react';
import './SearchBar.css'
import { useStateValue } from '../../StateProvider';

// Icons
import SearchIcon from '@material-ui/icons/Search';

function SearchBar({getLocationWeather}) {
	const [{weather}, dispatch] = useStateValue();
	const [searchText, setSearchText] = useState();

	const setLocation = () => {
		if (searchText != null) {
			let text = searchText.split(',')
			let city = text[0]
			let state = text[1]
			let country = text[3]

			getLocationWeather(city, state, country);
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
