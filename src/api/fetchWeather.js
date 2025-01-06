import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5';
const APIKey = 'd09f2ec97d4d3721df3be2019f450d92';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(`${URL}/weather`, {
    params: {
      q: query, // City name
      units: 'metric', // Temperature in Celsius
      appid: 'd09f2ec97d4d3721df3be2019f450d92', // API key
    },
  });
  return data;
};


 
