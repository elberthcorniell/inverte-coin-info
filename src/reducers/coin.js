import { setCoin } from '../actions';

const coinReducer = (state = {}, action) => {
  const { coin } = action;
  switch (action.type) {
    case 'SET_COIN':
      return setCoin(coin);
    default:
      return state;
  }
};

export default coinReducer;
