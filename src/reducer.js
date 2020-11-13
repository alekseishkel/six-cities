const ActionCreator = {
  changeCity: () => ({
    type: `CHANGE_CITY`,
    payload: ``
  }),

  getOffersCoords: () => ({
    type: `GET_OFFERS_COORDS`,
    payload: ``
  })
};

const initialState = {
  city: `Amsterdam`,
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
  return state;
};

export {
  ActionCreator,
  reducer
};
