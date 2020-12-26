const initialState = {
  data: {
    offers: null,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_DATA`:
      return Object.assign({}, state.data, {
        offers: action.payload
      });
    default:
      return state.data;
  }
};

export default reducer;
