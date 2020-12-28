import ActionCreator from '../action-creator/action-creator';

const Operations = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.changeCity(response.data[0].city.name));
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },

  signIn: (email, password, status) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    }).then((response) => {
      dispatch(ActionCreator.signIn(response.data));
      dispatch(ActionCreator.requireAuthorization(!status));
    });
  }
};

export default Operations;
