import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector  } from 'react-redux';
import { Container, StyleUl } from './styles'

export const Aside = () => {

  const { role} = useSelector( state => state.auth );


  
  return (
    <Container>
        
        <StyleUl>
        <NavLink to="/inicio" activeclassname="current" exact="true">
          <li>Inicio</li>
        </NavLink>
        <NavLink to="/mascotas" activeclassname="current" exact="true">
          <li>Mascotas</li>
        </NavLink>
        {
          (role == "USER") 
          &&
          <NavLink to="/favoritos" activeclassname="current" exact="true">
            <li>Favoritos</li>
          </NavLink>

        }

        </StyleUl>
    </Container>
  )
}
