// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'AUTH_LOGIN'
export const COUNTER_DOUBLE_ASYNC = 'AUTH_LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function login (credentials) {
  return {
    type    : AUTH_LOGIN,
    payload : credentials
  }
}
export function logout (credentials) {
  return {
    type    : AUTH_LOGIN,
    payload : credentials
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  login,
  logout
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
