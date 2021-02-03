import axios from "axios";

const instance = axios.create({
  baseUrl: process.env.BASE_URL_DEV,
  timeout: 15000
});

console.log(process.env.BASE_URL_DEV);

instance.interceptors.request.use(config => {
  return config;
});

instance.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    const errMsg = `error: ${error}`;
    console.error(errMsg);

    return Promise.reject(error);
  }
);

export default instance;
