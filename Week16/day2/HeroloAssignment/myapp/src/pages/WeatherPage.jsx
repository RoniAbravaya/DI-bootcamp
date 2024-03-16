import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDetails from '../components/WeatherDetails';
import axios from 'axios';

const apiKey = 'fAwBwD7Tpkt6i1XOOieUag6ZnhKxrfWm';

const WeatherPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const locationKeyResponse = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}`);
      const locationKey = locationKeyResponse.data[0]?.Key;
      const weatherDataResponse = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}&details=false&metric=true`);
      setWeatherData(weatherDataResponse.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-page">
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && <WeatherDetails weatherData={weatherData} />}
    </div>
  );
};

export default WeatherPage;
