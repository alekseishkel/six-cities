import ActionCreator from '../action-creator/action-creator';

const Operations = {
  loadOffers: (history) => (dispatch, _, api) => {
    let city = history.location.pathname.split(`/`)[1];

    return api.get(`/hotels`)
    .then((response) => {
      if (city === ``) {
        city = response.data[0].city.name;
        history.push(city);
      }
      dispatch(ActionCreator.changeCity(city));
      dispatch(ActionCreator.loadOffers(response.data));
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
  }
};

export default Operations;
