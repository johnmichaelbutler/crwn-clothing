import { UserActionTypes } from './user.types';
// Intializing a state
const INITIAL_STATE = {
  currentUser: null
}

// Sets initial state as the default state
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
}

export default userReducer;