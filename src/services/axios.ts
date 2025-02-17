import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;