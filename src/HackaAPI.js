import { AsyncStorage } from 'react-native';

const devURL = 'http://192.168.0.176:8084/WService01/webresources/service01/';

const HackaAPI = {
  req: (options) => {
    let urlSuffix = options.endpoint ? options.endpoint : '';
    let urlMethod = options.method ? options.method : 'GET';
    let urlHeaders = options.headers ? options.headers : {};
    let urlBody = options.body ? options.body : {};
    let urlSuccess = options.success ? options.success : () => {};
    let urlError = options.error ? options.error : () => {}; 

    let endpoint = devURL + urlSuffix;
    let jsonData = JSON.stringify(urlBody);

    if(urlMethod == 'GET') {
      json.data = null;

      let query = '';
      for(let i in urlBody) {
        query += encodeURIComponent(i) + '=' + encodeURIComponent(urlBody[i]) + '&';
      }

      endpoint += '?' + query;
    }

    fetch(endpoint, {
      method: urlMethod,
      headers: urlHeaders,
      body: jsonData
    })
    .then((response) => response.json())
    .then(urlSuccess)
    .catch(urlError);
  }
};

export default HackaAPI;
