const initialState = {
  data: {
    offers: null,
    user: null,
    reviews: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_DATA`:
      return Object.assign({}, state.data, {
        offers: action.payload
      });
    case `SIGN_IN`:
      return Object.assign({}, state.data, {
        user: action.payload
      });
    case `SEND_REVIEW`:
      return Object.assign({}, state.data, {
        reviews: action.payload
      });
    case `LOAD_REVIEWS`:
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
