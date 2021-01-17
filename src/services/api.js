import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sofias.herokuapp.com/api'
});

export default api;
