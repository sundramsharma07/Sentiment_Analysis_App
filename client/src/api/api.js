// api.js - Update this file
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Add /api here
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;