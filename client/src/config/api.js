import axios from 'axios';

const LOCALHOST = 'http://localhost:4000';
export const API_BASE_URL = LOCALHOST;

// Create a new axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Set up request interceptors to dynamically set the authorization token
api.interceptors.request.use(
  config => {
    // Fetch the JWT token from local storage each time a request is made
    const token = localStorage.getItem('jwt');
    if (token) {
      // Set the Authorization header if a token exists
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Set the default content type for post requests
api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
