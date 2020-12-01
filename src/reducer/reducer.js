const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
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
  })
};

const initialState = {
  city: `Paris`,
  cityCoords: [48.8680266086781, 2.351173200195321],
  mapZoom: 11,
  sortingOpened: false,
  sorting: `Popular`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        city: action.payload
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
      return Object.assign({}, state, {
        sorting: action.payload
      });
    default:
      return state;
  }
};

export {
  ActionCreator,
  reducer
};