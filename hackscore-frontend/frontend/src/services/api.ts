import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Substitua pela URL correta do seu backend
});

export default api;
