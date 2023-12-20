import axios from "axios";
const service = axios.create({
  baseURL: process.env.REACT_APP_BASEAPI,
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
});

const CancelToken = axios.CancelToken;

// request interceptor
service.interceptors.request.use(
  (config) => {
    config.cancelToken = new CancelToken((cancel) => {});
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
