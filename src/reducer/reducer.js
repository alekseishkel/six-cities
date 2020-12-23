import offers from '../mocks/offers';

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

  loadOffers: (data) => ({
    type: `LOAD_DATA`,
    payload: data
  })
};

const Operations = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => dispatch(ActionCreator.loadOffers(response.data)));
  }
};

const initialState = {
  city: `Paris`,
  offers,
  sorting: `Popular`,
  activeCard: null,
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
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
      console.log(state);
      return Object.assign({}, state, {
        data: action.payload
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
