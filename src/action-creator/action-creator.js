const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),

  changeSorting: (sorting) => ({
    type: `CHANGE_SORTING`,
    payload: sorting
  }),

  changeActiveCard: (card) => ({
    type: `CHANGE_ACTIVE_CARD`,
    payload: card
  }),

  loadOffers: (offers) => ({
    type: `LOAD_DATA`,
    payload: offers
  }),

  requireAuthorization: (status) => ({
    type: `REQUIRE_AUTHORIZATION`,
    payload: status
  }),

  signIn: (user) => ({
    type: `SIGN_IN`,
    payload: user
  }),

  loadReviews: (reviews) => ({
    type: `LOAD_REVIEWS`,
    payload: reviews
  }),

  sendReview: (review) => ({
    type: `SEND_REVIEW`,
    payload: review
  }),

  updateReviews: (review) => ({
    type: `UPDATE_REVIEWS`,
    payload: review
  })
};

export default ActionCreator;
