import axios from 'axios';

const isLocalhost = window.location.hostname === 'localhost';

const api = axios.create({
  baseURL: isLocalhost
    ? 'http://localhost:5000'
    : 'https://easylearnbackend.onrender.com',
});

export default api;

