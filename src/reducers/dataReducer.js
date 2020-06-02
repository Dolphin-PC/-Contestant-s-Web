import { FETCH_TODOS, FETCH_LANDING } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LANDING:
      return action.payload;
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
