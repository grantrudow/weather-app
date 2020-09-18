import React, { useEffect } from 'react';
import './App.css';
import { useStateValue } from './StateProvider';
import axios from './axios';
import { Responsive } from "responsive-react";

// Components
import Home from './components/Home/Home';
import MobileHome from './components/MobileHome/MobileHome';

// Images
// Possibly make this a component so it will display differently
import cloudyDay from './resources/images/cloudyDay.jpg';
import rainyDay from './resources/images/rainyDay.jpg';
import sunnyDay from './resources/images/sunnyDay.jpg'
import sunset from './resources/images/sunset.jpg';

function App() {
  const [{location, weather}, dispatch] = useStateValue();
  const weatherApi ='ed8879c76ac5097000f1c6a9159c4e7f';

  const getLocationWeather = async (city, state, country) => {
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
        currentTemp: data.list[0].main.temp,
        humidity: data.list[0].main.humidity,
        cloudCoverage: data.list[0].clouds.all,
        windSpeed: data.list[0].wind.speed
      }
    })
    }
    
  return (
    <div className="App">
      <Responsive displayIn={["Laptop"]}>
        <Home getLocationWeather={getLocationWeather} /> 
      </Responsive>
      <Responsive displayIn={["Mobile", "Tablet"]}>
        <MobileHome getLocationWeather={getLocationWeather}/>
      </Responsive>
      <img 
        src={sunnyDay} 
        alt="Type of Weather"
        className="background-image" 
        />
    </div>
  );
}

export default App;
