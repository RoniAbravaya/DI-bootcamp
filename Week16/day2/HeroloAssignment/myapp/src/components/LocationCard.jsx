import React from 'react';

const LocationCard = ({ location, onRemoveFavorite }) => {
  return (
    <div className="location-card" onClick={() => onClick(location.id)}>
      <h3>{location.name}</h3>
      {/* Display current weather for the location */}
      {/* Add/remove from favorites button */}
    </div>
  );
};

export default LocationCard;
