import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, StyleLi, StyleUl } from './styles'

export const Aside = () => {

  const pcode = localStorage.getItem('code');


  
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
          (pcode == 0) 
          &&
          <NavLink to="/favoritos" activeclassname="current" exact="true">
            <li>Favoritos</li>
          </NavLink>

        }

        </StyleUl>
    </Container>
  )
}
