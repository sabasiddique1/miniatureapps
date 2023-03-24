import React, { useState } from 'react';
import './WeatherApp.css';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cc1f3218cd9ebf374287bb64fbd406bf`)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        setErrorMessage('');
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Wrong information entered, please try again.');
        setWeatherData(null);
      });
  };

  return (
    <div className="weather-app">
      <h1 className='weather-h1'>Weather App</h1>
      <form onSubmit={handleFormSubmit}>
        <input className='weather-input' type="text" value={city} onChange={handleInputChange} />
        <br/>
        <button className='weather-button' type="submit">Get Weather</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {weatherData && (
        <div className="weather-data">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
