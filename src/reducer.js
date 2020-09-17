export const initialState = {
	location: {
		city: '',
		status: false,
		state: '',
		country: ''
	},
	weather: {
		city: '',
		country: '',
		timezone: 0,
		sunrise: 0,
		sunset: 0,
		weatherForecast: [],
		currentTemp: 0
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
		case 'SET_WEATHER_DATA':
			return {
				...state,
				weather: action.item
			}
		default:
			return state
	}
}

export default reducer;