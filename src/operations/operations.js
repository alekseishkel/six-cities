import ActionCreator from '../action-creator/action-creator';

const Operations = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.changeCity(response.data[0].city.name));
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

export default Operations;
