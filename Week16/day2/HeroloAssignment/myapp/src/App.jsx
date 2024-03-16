import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Route

import Header from './components/Header';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import { fetchLocationKey, fetchWeatherDetails } from './utils/api';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [favoriteLocations, setFavoriteLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const locationKey = await fetchLocationKey(city);
      const weatherData = await fetchWeatherDetails(locationKey);
      setWeatherData(weatherData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleAddFavorite = (location) => {
    setFavoriteLocations([...favoriteLocations, location]);
  };

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favoriteLocations.filter((location) => location.id !== id);
    setFavoriteLocations(updatedFavorites);
  };

  const handleCloseError = () => {
    setError(null);
  };

  console.log()

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<WeatherPage 
            onSearch={handleSearch} 
            loading={loading} 
            error={error} 
            weatherData={weatherData} 
            favoriteLocations={favoriteLocations}
            onAddFavorite={handleAddFavorite}
            onRemoveFavorite={handleRemoveFavorite}
          />} />
          <Route path="/favorites" element={<FavoritesPage 
            favoriteLocations={favoriteLocations} 
            onRemoveFavorite={handleRemoveFavorite} 
          />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;