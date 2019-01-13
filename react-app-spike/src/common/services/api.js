import axios from 'axios';
import config from '../config/config';

const host = config.host;

const get = (endpoint, query) => {
  const request = query
    ? `${host}/${endpoint}?${query}`
    : `${host}/${endpoint}`;

  return new Promise((resolve, reject) => {
    axios
      .get(request)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};

export default {
  get
};