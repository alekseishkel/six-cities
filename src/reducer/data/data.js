const initialState = {
  data: {
    favorites: null,
    offers: null,
    reviews: null,
    user: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_OFFER_TO_FAVORITES`:
      const addOfferToFavorites = [
        ...state.data.favorites,
        action.payload
      ];

      return Object.assign({}, state.data, {
        favorites: addOfferToFavorites
      });
    case `GET_FAVORITE_OFFERS`:
      return Object.assign({}, state.data, {
        favorites: action.payload
      });
    case `LOAD_DATA`:
      return Object.assign({}, state.data, {
        offers: action.payload
      });
    case `LOAD_REVIEWS`:
      return Object.assign({}, state.data, {
        reviews: action.payload
      });
    case `REMOVE_OFFER_FROM_FAVORITES`:
      const offerIndex = state.data.favorites.findIndex((offer) => offer.id === action.payload);

      const updatedFavorites =
        [...state.data.favorites.slice(0, offerIndex),
          ...state.data.favorites.slice(offerIndex + 1)];

      return Object.assign({}, state.data, {
        favorites: updatedFavorites
      });
    case `SIGN_IN`:
      return Object.assign({}, state.data, {
        user: action.payload
      });
    case `SEND_REVIEW`:
      return Object.assign({}, state.data, {
        reviews: action.payload
      });
    case `UPDATE_REVIEWS`:
      const updatedReviews = [
        ...state.data.reviews,
        action.payload
      ];

      return Object.assign({}, state.data, {
        reviews: updatedReviews
      });
    default:
      return state.data;
  }
};

export default reducer;
