import data from './data/data';
import userState from './user-state/user-state';

const reducer = (state, action) => {
  return {
    userState: userState(state, action),
    data: data(state, action)
  };
};


export default reducer;
