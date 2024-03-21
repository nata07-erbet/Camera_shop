import axios, {AxiosInstance} from 'axios';
import { API_URL } from '../const/const';

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
  });

  api.interceptors.request.use(
    (config) => config
  );

  return api;
};

// export {createApi};
export const api = createApi();
