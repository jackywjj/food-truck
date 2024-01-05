import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

var Promise = require('promise');

export function get(url, params = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params || {},
      headers: headers,
    }).then(({ data }) => {
      let { code, msg } = data;
      if (code !== '' && code !== '200' && code !== '0' && code !== 0) {
        message.error(msg);
        reject(data.data);
      } else {
        resolve(data.data);
      }
    }).catch(err => {
      reject(err || err.data);
    });
  });
}

export function post(url, params = {}, headers = {}, isJson = false) {
  let headerParams = {
    'content-type': isJson ? 'application/json' : 'application/x-www-form-urlencoded',
    ...headers,
  };
  if (headers && headers['content-type'] === 'application/json') {
    isJson = true;
  }

  return new Promise((resolve, reject) => {
    axios.post(url, isJson ? params : qs.stringify(params), {
      headers: headerParams,
    }).then(res => {
      let { code, msg } = res.data;
      if (code !== '' && code !== '200') {
        message.error(msg);
        reject(res.data);
      } else {
        resolve(res.data);
      }
    }).catch(err => {
      reject(err || err.data);
    });
  });
}
