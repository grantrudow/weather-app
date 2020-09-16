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
		weatherForecast: []
	}
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