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
  })
};

const Operations = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        dispatch(ActionCreator.changeCity(response.data[0].city.name));
      });
  }
};

const initialState = {
  city: null,
  offers: null,
  sorting: `Popular`,
  activeCard: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      console.log(state);
      return Object.assign({}, state, {
        city: action.payload
      });
    case `CHANGE_SORTING`:
      return Object.assign({}, state, {
        sorting: action.payload
      });
    case `CHANGE_ACTIVE_CARD`:
      return Object.assign({}, state, {
        activeCard: action.payload
      });
    case `LOAD_DATA`:
      console.log(action.payload);
      return Object.assign({}, state, {
        offers: action.payload
      });
    default:
      return state;
  }
};

export {
  ActionCreator,
  reducer,
  Operations
};
