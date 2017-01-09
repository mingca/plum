
export const SET_TOKEN = "SET_TOKEN"
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export function setToken(token) {
  return {type: SET_TOKEN, payload: token};
}
export function login (credentials) {
  return {
    type    : AUTH_LOGIN,
    payload : credentials
  }
}
export function logout () {
  return {
    type    : AUTH_LOGOUT,
    payload : {}
  }
}
export const actions = {
  setToken,
  login,
  logout
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_TOKEN]   : (state, action) =>  Object.assign({}, state, {token: action.payload}) ,
  [AUTH_LOGIN]    : (state, action) => state + action.payload,
  [AUTH_LOGOUT]   : (state, action) => Object.assign({}, state, {token: ''})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  token: ''
}
export default function singinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
