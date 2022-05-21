import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector  } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { HomeScreen } from '../components/Home/HomeScreen/HomeScreen';
import { Main } from '../components/Home/Main/Main';
import { MascotaNew } from '../components/MascotaNew/MascotaNew';
import { MascotaScreen } from '../components/MascotaScreen/MascotaScreen';
import { MascotaUpdate } from '../components/MascotaUpdate/MascotaUpdate';
import AuthRouter from './Auth/AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, uid} = useSelector( state => state.auth );

  useEffect(() => {

    dispatch(startChecking())  

    // console.log( user )
    // if( user?.uid ) {
    //   setIsLoggedIn( true );
    // } else {
    //   setIsLoggedIn( false );
    // }

    
  }, [dispatch])

  if ( checking ) {
    return ( <h5> Authentication...</h5> )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={ 
            <PublicRoute isAuthenticated={ !!uid }>
              <AuthRouter/> 
            </PublicRoute>
          }/>
        <Route exact path='/inicio' element={ 
          <PrivateRoute isAuthenticated={ !!uid } >
            <HomeScreen children={ <Main/> }/> 
          </PrivateRoute>
        }/>
        <Route exact path='/mascotas' element={ 
          <PrivateRoute isAuthenticated={ !!uid } >
            <HomeScreen children={ <MascotaScreen/> }/> 
          </PrivateRoute>
        }/>
        <Route exact path='/create' element={ 
          <PrivateRoute isAuthenticated={ !!uid } >
            <HomeScreen children={ <MascotaNew/> }/> 
          </PrivateRoute>
        }/>
        <Route exact path='/update' element={ 
          <PrivateRoute isAuthenticated={ !!uid } >
            <HomeScreen children={ <MascotaUpdate/> }/> 
          </PrivateRoute>
        }/>

        <Route
          path="*"
          element={ <Navigate to="/auth/login"/> }
        />
      </Routes>

    </BrowserRouter>
  )
}
