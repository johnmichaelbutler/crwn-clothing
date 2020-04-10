import { UserActionTypes } from './user.types';
// Our action returns an object with type and payload
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})