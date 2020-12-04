import offers from '../mocks/offers';

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),

  changeOffers: (places) => ({
    type: `CHANGE_OFFERS`,
    payload: places
  }),

  changeCityCoords: (cityCoords) => ({
    type: `CHANGE_CITY_COORDS`,
    payload: cityCoords
  }),

  changeZoom: (zoom) => ({
    type: `CHANGE_ZOOM`,
    payload: zoom
  }),

  toggleSorting: (sortingOpened) => ({
    type: `TOGGLE_SORTING`,
    payload: !sortingOpened
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
  offers: offers.Paris.offers,
  cityCoords: [48.8680266086781, 2.351173200195321],
  mapZoom: 11,
  sortingOpened: false,
  sorting: `Popular`,
  activeCard: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        city: action.payload
      });
    case `CHANGE_OFFERS`:
      return Object.assign({}, state, {
        offers: action.payload
      });
    case `CHANGE_CITY_COORDS`:
      return Object.assign({}, state, {
        cityCoords: action.payload
      });
    case `CHANGE_ZOOM`:
      return Object.assign({}, state, {
        mapZoom: action.payload
      });
    case `TOGGLE_SORTING`:
      return Object.assign({}, state, {
        sortingOpened: action.payload
      });
    case `CHANGE_SORTING`:
      let places = state.offers.slice();

      if (action.payload === `Popular`) {
        places = offers[state.city].offers;
      }

      if (action.payload === `Price: low to high`) {
        places.sort((a, b) => a.price - b.price);
      }

      if (action.payload === `Price: high to low`) {
        places.sort((a, b) => b.price - a.price);
      }

      // if (action.payload === `Top rated first`) {
      //   places.sort((a, b) => a.rating - b.rating);
      // }

      return Object.assign({}, state, {
        offers: places,
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
