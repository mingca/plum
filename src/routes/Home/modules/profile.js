
export const SET_PROFILE = "SET_PROFILE"
export const SET_AUTHOR = "SET_AUTHOR"
export const SET_QUOTE = "SET_QUOTE"
export const REQUEST_START = "REQUEST_START"
export const REQUEST_FINISH = "REQUEST_FINISH"

export function setProfile(profile) {
  return {type: SET_PROFILE, payload: profile};
}
export function setAuthor(author) {
  return {type: SET_AUTHOR, payload: author};
}
export function setQuote(quote) {
  return {type: SET_QUOTE, payload: quote};
}
export function requestStart(quote) {
  return {type: REQUEST_START, payload: true};
}
export function requestFinish(quote) {
  return {type: REQUEST_FINISH, payload: false};
}

export const actions = {
  setProfile,
  setAuthor,
  setQuote,
  requestStart,
  requestFinish
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_PROFILE]   	: (state, action) =>  Object.assign({}, state, {profile: action.payload}) ,
  [SET_AUTHOR]   	  : (state, action) =>  Object.assign({}, state, {author: action.payload}) ,
  [SET_QUOTE]       : (state, action) =>  Object.assign({}, state, {quote: action.payload}) ,
  [REQUEST_START]   : (state, action) =>  Object.assign({}, state, {requesting: action.payload}) ,
  [REQUEST_FINISH]   : (state, action) =>  Object.assign({}, state, {requesting: action.payload}) 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  profile   : '',
  author    : '',
  quote     : '',
  requesting: false
}
export default function singinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}