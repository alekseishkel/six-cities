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
  })
};

const initialState = {
  city: `Paris`,
  cityCoords: [48.8680266086781, 2.351173200195321],
  mapZoom: 11,
  offersCoords: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198]
  ],
  offers: [{
    description: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: `€120`,
    type: `Apartment`,
    isPremium: true,
    isBookmark: false
  },
  {
    description: `Wood and stone place`,
    img: `img/room.jpg`,
    price: `€80`,
    type: `Private room`,
    isPremium: false,
    isBookmark: false
  },
  {
    description: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    price: `€132`,
    type: `Apartment`,
    isPremium: false,
    isBookmark: false
  },
  {
    description: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-03.jpg`,
    price: `€180`,
    type: `Apartment`,
    isPremium: false,
    isBookmark: false
  }]
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
    default:
      return state;
  }
};

export {
  ActionCreator,
  reducer
};
