import React, { useState } from 'react';
import './MobileSearch.css';
import { useStateValue } from '../../StateProvider';

// Icons
import SearchIcon from '@material-ui/icons/Search';

function MobileSearch({getLocationWeather}) {
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
        <div className="mobileSearch grid">
            <input 
			    type="text" 
			    placeholder="Ex: Oxford, MS, US" 
			    onChange={event => setSearchText(event.target.value)}
			/>
			<button type="submit" onClick={setLocation}>
				<SearchIcon style={{ fontSize: 30 }}/>
			</button>
        </div>
    )
}

export default MobileSearch;
