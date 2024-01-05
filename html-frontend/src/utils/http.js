import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

var Promise = require('promise');

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params || {},
        headers: headers,
      })
      .then(({ data }) => {
        let { code, msg } = data;
        if (code !== '' && code !== '200' && code !== '0' && code !== 0) {
          message.error(msg);
          reject(data.data);
        } else {
          resolve(data.data);
        }
      })
      .catch(err => {
        reject(err || err.data);
      });
  });
}

/**
 * post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求携带的参数]
 * @param {Object} headers [请求的headers参数]
 * @param {Boolean} isJson [请求格式是否使用json传参]
 */
export function post(url, params = {}, headers = {}, isJson = false) {
  let headerParams = {
    'content-type': isJson ? 'application/json' : 'application/x-www-form-urlencoded',
    ...headers,
  };
  if (headers && headers['content-type'] === 'application/json') {
    isJson = true;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(url, isJson ? params : qs.stringify(params), {
        headers: headerParams,
      })
      .then(res => {
        let { code, msg } = res.data;
        if (code !== '' && code !== '200') {
          message.error(msg);
          reject(res.data);
        } else {
          resolve(res.data);
        }
      })
      .catch(err => {
        reject(err || err.data);
      });
  });
}

/**
 * put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求携带的参数]
 * @param {Object} headers [请求的headers参数]
 * @param {Boolean} isJson [请求格式是否使用json传参]
 */
export function put(url, params, headers = {}, isJson = false) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, isJson ? params : qs.stringify(params), {
        headers: headers,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err || err.data);
      });
  });
}

/**
 * delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求携带的参数]
 */
export function del(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: params,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err || err.data);
      });
  });
}
