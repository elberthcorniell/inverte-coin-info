import { combineReducers, createStore } from 'redux';
import coins from './coins';
import coin from './coin';
import filter from './filter';

const rootReducer = combineReducers({
  coins,
  coin,
  filter,
});

const store = createStore(rootReducer);

export default store;
