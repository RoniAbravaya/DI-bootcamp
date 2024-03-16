import React from 'react';

const FavoriteLocations = ({ favoriteLocations }) => {
  return (
    <div className="favorite-locations">
      <h2>Favorite Locations</h2>
      {/* Display list of favorite locations */}
      {favoriteLocations.map((location) => (
        <div key={location.id}>
          {/* Display each favorite location */}
          <p>{location.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteLocations;
