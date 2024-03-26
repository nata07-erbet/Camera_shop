import axios, { AxiosInstance, AxiosError } from 'axios';
import { API_URL } from '../const/const';
import {toast} from 'react-toastify';

type DetailMessageType = {
  type: string;
  message: string;
}
const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
  });

  api.interceptors.request.use(
    (config) => config
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if(error.response) {
        const detailMessage = (error.response.data);

        toast.warn(detailMessage.message);
      }
    }
  );
  return api;
};

export const api = createApi();
