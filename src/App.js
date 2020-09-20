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
  const [{currentWeather}, dispatch] = useStateValue();
  const weatherApi ='ed8879c76ac5097000f1c6a9159c4e7f';
  let backgroundImage = sunnyDay;

  if (currentWeather.currentDescription === 'Clear') {
    backgroundImage = sunnyDay
  } else if (currentWeather.currentDescription === 'Clouds') {
    backgroundImage = cloudyDay
  } else if (currentWeather.currentDescription === 'Rain') {
    backgroundImage = rainyDay
  }

  const getLocationWeather = async (city, state, country) => {
    const response = await axios({
      method: 'get',
      url: `/weather?q=${city},${state},${country}&appid=${weatherApi}`
    })
    const data = response.data;
    
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const days = [
      'Mon',
      'Tue',
      'Wed',
      'Thurs',
      'Fri',
      'Sat',
      'Sun'
    ]

    let today = new Date()
    let year = today.getFullYear();
    let monthName = months[today.getMonth()];
    let day = today.getDate();
    let dayOfWeek = days[today.getDay()];

    let formattedDay = `${dayOfWeek} - ${day} ${monthName}, ${year}`

    dispatch({
      type: 'SET_CURRENT_WEATHER_DATA',
      item: {
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        currentDescription: data.weather[0].main,
        currentTemp: data.main.temp,
        currentFeel: data.main.feels_like,
        currentHumidity: data.main.humidity,
        todayHigh: data.main.temp_max,
        todayLow: data.main.temp_min,
        currentWindSpeed: data.wind.speed,
        currentDate: formattedDay
      }
    })
    }
    
  return (
    <div className="App">
      <Home getLocationWeather={getLocationWeather} />
      {/* <Responsive displayIn={["Laptop"]}>
        <Home getLocationWeather={getLocationWeather} /> 
      </Responsive>
      <Responsive displayIn={["Mobile", "Tablet"]}>
        <MobileHome getLocationWeather={getLocationWeather}/>
      </Responsive> */}
      <img 
        src = {backgroundImage}
        alt="Type of Weather"
        className="background-image" 
        />
    </div>
  );
}

export default App;
