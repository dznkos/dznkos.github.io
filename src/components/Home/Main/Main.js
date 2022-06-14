import React,{ useEffect} from 'react'
import { Container } from './styles'

import { useDispatch } from 'react-redux';
import { petClearActive } from '../../../actions/pets';

export const Main = () => {


  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(petClearActive())
    
  }, [])

  return (
    <Container>
      <h1>Bienvenido!</h1>
      <p>
        Explore PetApps, en este sitio puede registrar sus mascotas, <br/>  
        subir imagenes y elegir sus favoritas.
      </p>
      <br/>
      <br/>
      <p>Ingresa a "Mascotas" para crear nuevas mascotas</p>
    </Container>
  )
}
