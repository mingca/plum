import { CALL_API } from '../../../middlewares/api';

export const SET_TOKEN = "SET_TOKEN"

export function setToken(token) {
  return {type: SET_TOKEN, payload: token};
}

export const actions = {
  setToken
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_TOKEN]   : (state, action) =>  Object.assign({}, state, {token: action.payload}) 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  credentials: ''
}
export default function singinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}