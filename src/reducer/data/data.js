const initialState = {
  data: {
    offers: null,
    user: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_DATA`:
      return Object.assign({}, state.data, {
        offers: action.payload
      });
    case `SIGN_IN`:
      console.log(action.payload);
      return Object.assign({}, state.data, {
        user: action.payload
      });
    default:
      return state.data;
  }
};

export default reducer;
