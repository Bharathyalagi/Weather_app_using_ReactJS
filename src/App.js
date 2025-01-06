import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';
import { FaSearch } from 'react-icons/fa';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const search = async (e) => {
    if (e.key === 'Enter') {
      setLoading(true); // Show loading
      try {
        setError('');
        const data = await fetchWeather(query);
        setWeather(data);
        setQuery('');
      } catch {
        setError('City not found. Please try again.');
      }
      setLoading(false); // Hide loading
    }
  };

  return (
    <div className="main-container">
      <div>
        <input
          type="text"
          placeholder="Search City..."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <FaSearch className="search-icon" />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>°C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
