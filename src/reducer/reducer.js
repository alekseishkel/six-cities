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
  })
};

const initialState = {
  city: `Paris`,
  offers,
  sorting: `Popular`,
  activeCard: null
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
    default:
      return state;
  }
};

export {
  ActionCreator,
  reducer
};
