export const initialState = {
	location: {
		city: '',
		status: false,
		state: '',
		country: ''
	},
	currentWeather: {
		city: '',
		country: '',
		sunrise: 0,
		sunset: 0,
		currentDescription: '',
		currentTemp: 300,
		currentFeel: 300,
		currentHumidity: 0,
		currentWindSpeed: 0,
		todayHigh: 300,
		todayLow: 300,
		currentDate: Date()
	}
}

export const getFahrenheit = (temp) => {
	let tempF = ((temp-273.15)*(9/5)+32)
	return Math.round(tempF)
}

export const getCelsius = (temp) => {
	let tempC = ((temp-273.15))
	return Math.round(tempC)
}

const reducer = (state, action) => {
	console.log(action);

	switch(action.type) {
		case 'SET_LOCATION':
			return {
				...state,
				location: action.item
			}
		case 'SET_CURRENT_WEATHER_DATA':
			return {
				...state,
				currentWeather: action.item
			}
		default:
			return state
	}
}

export default reducer;