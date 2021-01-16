import ActionCreator from '../action-creator/action-creator';

import {getNamesOfSixCities, getFavoriteOffers} from '../utils/utils';

const Operations = {
  loadOffers: (history) => (dispatch, _, api) => {
    let pathname = history.location.pathname.split(`/`)[1];

    return api.get(`/hotels`)
    .then((response) => {
      const favoriteOffers = getFavoriteOffers(response.data);
      const citiesNames = getNamesOfSixCities(response.data);

      if (citiesNames.includes(pathname)) {
        dispatch(ActionCreator.changeCity(pathname));
      }

      if (!citiesNames.includes(pathname) && pathname !== ``) {
        dispatch(ActionCreator.changeCity(citiesNames[0]));
      }

      if (pathname === ``) {
        pathname = response.data[0].city.name;

        history.push(response.data[0].city.name);
        dispatch(ActionCreator.changeCity(pathname));
      }

      dispatch(ActionCreator.loadOffers(response.data));
      dispatch(ActionCreator.getFavoriteOffers(favoriteOffers));
    });
  },

  signIn: (email, password, status) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    }).then((response) => {
      dispatch(ActionCreator.signIn(response.data));
      dispatch(ActionCreator.requireAuthorization(status));
    });
  },

  loadReviews: (id) => (dispatch, _, api) => {
    return api.get(`/comments/1`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },

  sendReview: (review, id) => (dispatch, _, api) => {
    console.log(id);
    return api.post(`/comments/${id}`, review)
      .then(() => {
        dispatch(ActionCreator.updateReviews(review));
      });
  },
};

export default Operations;
