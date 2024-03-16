// api.js
import axios from 'axios';

const apiKey = 'fAwBwD7Tpkt6i1XOOieUag6ZnhKxrfWm';

export const fetchLocationKey = async (city) => {
  try {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}`);
    const locationKey = response.data[0]?.Key;
    return locationKey || null;
  } catch (error) {
    console.error('Error fetching location key:', error);
    return null;
  }
};

export const fetchWeatherDetails = async (locationKey) => {
  try {
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}&details=false&metric=true`);
    const weatherDetails = response.data;
    return weatherDetails || null;
  } catch (error) {
    console.error('Error fetching weather details:', error);
    return null;
  }
};

export default fetchWeatherDetails;
