import * as types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_LANDING:
      return action.payload;
    case types.FETCH_TODOS:
      return action.payload;
    case types.GET_TEAMDATA:
      return action.payload;
    default:
      return state;
  }
};
