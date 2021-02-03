import { changeFilter } from '../actions';

const filterReducer = (state = '', action) => {
  const { filter, type } = action;
  switch (type) {
    case 'CHANGE_FILTER':
      return changeFilter(filter);
    default:
      return state;
  }
};

export default filterReducer;
