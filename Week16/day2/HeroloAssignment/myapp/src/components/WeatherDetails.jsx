// WeatherDetails.jsx
import React from 'react';

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="weather-details">
      {/* Display current weather and 5-day forecast here */}
      {weatherData && (
        <>
          <h2>{weatherData.city}</h2>
          {/* Display current weather */}
          <div>
            <h3>Current Weather</h3>
            {/* Display current weather details */}
            {/* You can access weather details from weatherData object */}
          </div>
          {/* Display 5-day forecast */}
          <div>
            <h3>5-Day Forecast</h3>
            {/* Display forecast details */}
            {/* You can access forecast details from weatherData object */}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherDetails;
