import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://camera-shop.accelerator.pages.academy/';
const REQUEST_TIMEOUT = 5000;

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: baseURL,
    timeout: REQUEST_TIMEOUT
  });
  return api;

};

const getMocks = fetch(baseURL).then(re);

export { getMocks };
