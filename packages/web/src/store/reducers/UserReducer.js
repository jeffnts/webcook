import { SET_AUTHENTICATION } from '../../store/actionTypes/userActionTypes'

export const initialState = {
  _id: localStorage.getItem('id'),
  token: localStorage.getItem('token'),
  isAuthenticated: false
}



export const UserReducer = (state, action) => {

  switch (action.type) {
    case SET_AUTHENTICATION:{
      return{
        ...state,
        _id: localStorage.getItem('id'),
        token: localStorage.getItem('token'),
        isAuthenticated: action.payload.isAuthenticated
      }
    }

    default:
      return state
  }
}
