import React from 'react';
import LocationCard from '../components/LocationCard';

const FavoritesPage = ({ favoriteLocations, onRemoveFavorite }) => {
  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      {favoriteLocations.map((location) => (
        <LocationCard 
          key={location.id} 
          location={location} 
          onRemoveFavorite={onRemoveFavorite} 
        />
      ))}
    </div>
  );
};

export default FavoritesPage;
