import axios from 'axios';

export const baseURL = '';

const axiosService = axios.create({
  baseURL,
});

export { axiosService };
