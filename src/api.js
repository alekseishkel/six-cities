import axios from 'axios';
import {createBrowserHistory as history} from 'history';

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    if (response.status === 200 && response.config.url === `/login`) {
      history().goBack();
    }

    return response;
  };

  api.interceptors.response.use(onSuccess);

  return api;
};

export default createAPI;
