import axios from 'axios';

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    console.error(`Error ${error.response.status}. ${error.response.data.error}`);
    return error.response;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
