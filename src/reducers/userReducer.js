import * as types from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case types.POST_USERDATA:
      return state;
    case types.GET_USERDATA:
      return action.payload;
    case types.LOGOUT_USERDATA:
      return (state = '');
    default:
      return state;
  }
};
