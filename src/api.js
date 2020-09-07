import axios from 'axios';

const CONFIG = {
  'API_URL': 'http://www.omdbapi.com/',
  'API_KEY': 'e656bd4b'
};

const API = axios.create({
  baseURL: CONFIG.API_URL,
  params: {
    apikey: CONFIG.API_KEY,
    type: 'movie'
  }
});

export default API; 
