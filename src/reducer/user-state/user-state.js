const initialState = {
  userState: {
    city: null,
    sorting: `Popular`,
    activeCard: null,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state.userState, {
        city: action.payload
      });
    case `CHANGE_SORTING`:
      return Object.assign({}, state.userState, {
        sorting: action.payload
      });
    case `CHANGE_ACTIVE_CARD`:
      return Object.assign({}, state.userState, {
        activeCard: action.payload
      });
    default:
      return state.userState;
  }
};

export default reducer;
