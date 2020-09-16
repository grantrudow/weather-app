import React, { useEffect } from 'react';
import './App.css';
import { useStateValue } from './StateProvider';

// Components
import Home from './components/Home/Home'

// Images
// Possibly make this a component so it will display differently
import cloudyDay from './resources/images/cloudyDay.jpg';
import rainyDay from './resources/images/rainyDay.jpg';
import sunnyDay from './resources/images/sunnyDay.jpg'
import sunset from './resources/images/sunset.jpg';

function App({searchText}) {
  const [{location, weather}, dispatch] = useStateValue();

  console.log(weather.weatherType)
    
  return (
    <div className="App">
      <Home />
      <img 
      src={sunnyDay} 
      alt="Type of Weather"
      className="background-image" 
      /> 
    </div>
  );
}

export default App;
