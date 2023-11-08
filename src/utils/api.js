// src/utils/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
