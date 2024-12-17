import axios from 'axios';

const AxiosConfig = axios.create({
  baseURL: 'https://api.themoviedb.org/3/', // URL base da API
  timeout: 10000, // Tempo limite
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  params: {
    api_key: 'b382bdacacb93c023c7cc794f9069b06', // Adicione a API Key aqui
  },
});

export default AxiosConfig;
