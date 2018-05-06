// todo rewrite it in class styles

import axios from 'axios';
import { domain } from 'constants';

axios.defaults.withCredentials = true;

function prepareGetParams(data) {
  if (!Object.keys(data).length) {
    return ''
  }

  return `?${Object.keys(data).map(k => k + '=' + encodeURIComponent(JSON.stringify(data[k]))).join('&')}`
}

const api = {
  call(url, data = {}, type = 'get', config = {}) {
    let apiUrl = domain + 'api/' + url;
    let axiosConf = {
      url: type === 'get' ? `${apiUrl}${prepareGetParams(data)}` : apiUrl,
      method: type,
      ...config,
    };

    if (type !== 'get') {
      axiosConf.data = data;
    }

    return axios(axiosConf)
      .then(data => data.response || data)
      .catch(err => err.response || err)
  }
};

export default api;
export {
  prepareGetParams
}
