import axios from 'axios';
import { message } from 'antd';

const Promise = require('promise');
axios.defaults.baseURL = '';

axios.interceptors.request.use(config => {
  let token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});
axios.interceptors.response.use(
  function(response) {
    const { code, msg } = response.data;

    if (code !== '' && code !== '200') {
      message.error(msg);

      return;
    }

    return response;
  },
  function(error) {
    return Promise.reject(error);
  },
);
