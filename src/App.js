import React from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App grid">
      <WeatherCard />
      <WeatherCard />
    </div>
  );
}

export default App;
