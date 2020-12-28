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

  signIn: (user) => {
    console.log(user);
    return ({
      type: `SIGN_IN`,
      payload: user
    });
  }
};

export default ActionCreator;
