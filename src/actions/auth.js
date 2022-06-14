

import { fetchConToken, fetchSinToken } from '../api/fetch';
import { types } from '../types/types'
import { finishLoading, startLoading } from './ui';
// import { notesLogout } from './notes';

// const LOGIN_URL = "/users/login"


export const startLoginEmailPassword = ( email, password) => {
  return async( dispatch ) => {   

      dispatch( startLoading() );

      const resp = await fetchSinToken('users/login',
          { email, password},
          'POST');      
      const body = await resp.json();
      console.log(body);
        
      if ( body.ok ){        

        // localStorage.setItem('code', true)
        dispatch( loadRole( body.role[0] ) );
        
        
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime() );
        dispatch( login({ 
          uid: body.uid, 
          name: body.name } 
        ))
        dispatch( finishLoading() );
      }
      else {
        dispatch( authError({
          error: true,
          msg: body.msg
        }))
        dispatch( finishLoading() );
      }


  }
}

export const startChecking = () => {
  return async (dispatch) => {

    dispatch( startLoading() );

    const resp = await fetchConToken('users/renew');
    const body = await resp.json();

    console.log( body );
        
    if ( body.ok ){
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch( login({ 
        uid: body.uid, 
        name: body.name } 
      ))
      dispatch( finishLoading() );
    }
    else {

      dispatch( checkingFinish() )
      dispatch( finishLoading() );
    }

  }
}

const checkingFinish = () => ({
  type: types.authCheckingFinish
});

const authError = ( error )=>({
  type: types.authError,
  payload: {
    error: error.error,
    msg: error.msg 
  }
})

export const authRemoveError = () => ({
  type: types.authRemoveError
})



const login = ( user ) => ({
    type: types.login,
    payload: {
      uid: user.uid,
      name: user.name
    }
  })


export const startLogout = () => {
  return ( dispatch ) => {    

    localStorage.clear();
    dispatch( logout() );

  }
}

const logout = () => ({
  type: types.logout

})

export const loadRole = (userRole) => {
  return ( dispatch ) => { 
  dispatch( setRole(userRole) );
  }
}

const setRole = (userRole) => ({
  type: types.authLoadRole,
  payload: {
    role: userRole
  }
})