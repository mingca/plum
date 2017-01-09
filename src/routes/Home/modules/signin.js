import { CALL_API } from '../../../middlewares/api';

export const SET_INFO = "SET_INFO"

export function setInfo(info) {
  return {type: SET_INFO, payload: info};
}

export const actions = {
  setInfo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_INFO]   : (state, action) =>  Object.assign({}, state, {info: action.payload}) 
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