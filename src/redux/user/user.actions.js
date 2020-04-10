// Our action returns an object with type and payload
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
})