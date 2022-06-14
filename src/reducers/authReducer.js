

import { types } from '../types/types';

const initialState = {
  checking: true,

}


export const authReducer = ( state= initialState, action )=> {

  switch ( action.type ) {
    case types.login:
      return {
        ...state,
        checking: false,
        ...action.payload
      }

    case types.logout:
      return {
        checking: false,
       }

    case types.authError:
      return {
        ...state,
        error: true,
        ...action.payload
      };

    case types.authRemoveError:
      return {
        ...state,
        error: null,
        msg: null,
      };

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      }

    case types.authLoadRole:
      return{
        ...state,
        ...action.payload
      }
  
    default:
      return state;
  }

}