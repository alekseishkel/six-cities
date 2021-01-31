const ActionCreator = {
  addOfferToFavorites: (offer) => ({
    type: `ADD_OFFER_TO_FAVORITES`,
    payload: offer
  }),

  changeActiveCard: (card) => ({
    type: `CHANGE_ACTIVE_CARD`,
    payload: card
  }),

  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),

  changeSorting: (sorting) => ({
    type: `CHANGE_SORTING`,
    payload: sorting
  }),

  getFavoriteOffers: (favorites) => ({
    type: `GET_FAVORITE_OFFERS`,
    payload: favorites
  }),

  loadOffers: (offers) => ({
    type: `LOAD_DATA`,
    payload: offers
  }),

  loadReviews: (reviews) => ({
    type: `LOAD_REVIEWS`,
    payload: reviews
  }),

  removeOfferFromFavorites: (offer) => ({
    type: `REMOVE_OFFER_FROM_FAVORITES`,
    payload: offer
  }),

  requireAuthorization: (status) => ({
    type: `REQUIRE_AUTHORIZATION`,
    payload: status
  }),

  signIn: (user) => ({
    type: `SIGN_IN`,
    payload: user
  }),

  updateReviews: (review) => ({
    type: `UPDATE_REVIEWS`,
    payload: review
  }),
};

export default ActionCreator;
