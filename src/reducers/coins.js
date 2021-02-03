import { setCoins } from '../actions';

const coinsReducer = (state = [], action) => {
  const { coins } = action;
  switch (action.type) {
    case 'SET_COINS':
      return setCoins(coins);
    default:
      return state;
  }
};

export default coinsReducer;
