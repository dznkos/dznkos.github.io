import React, { useEffect, useState } from 'react'
import { Container, BoxMascotas, Data, NavLinkStyle, ButtonDel, ButtonCancel, Actions } from './styles'

import  { TrashAlt} from '@styled-icons/fa-solid/TrashAlt';
import { Pencil } from '@styled-icons/boxicons-solid/Pencil';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { petDelete, petsStartLoading, petClearActive } from '../../actions/pets';
import { CustomModal } from '../ModalAlert/ModalAlert';

export const MascotaScreen = () => {

  const dispatch = useDispatch();
  const { pets } = useSelector( state => state.pets)

  const initStatePet = {
    petid: '',
    show: false
  }

  const [showModal, setShowModal] = useState(initStatePet);

  const hideModal = () => {
    setShowModal(initStatePet)
  }

  const AlertDeletePet = ( id ) => {
    setShowModal( { petid: id, show: true } );

  }
  const deletePet = () => {
    dispatch( petDelete(showModal.petid) );
    hideModal()
  }

  useEffect(() => {

    dispatch(petClearActive())

  }, [])
  
  
  useEffect(() => {
    
    dispatch( petsStartLoading() );    

  }, [dispatch ]) 
  
  return (
    <Container>
      
        <NavLinkStyle to="/create" exact="true">
          Crear mascota
        </NavLinkStyle>  

      <BoxMascotas>       
        <ul>
          {
            pets?.map( (pet, i) => (
              <li key={ pet._id }>
                <Data>
                  <p>{ i+1 }</p>
                  <h4>{ pet.name }</h4>
                </Data>
                <Data>
                  <NavLink to='/update' state={{ mypet: pet}}><i ><Pencil width={ 20 } height={ 20 } color={ '#B6956A' }/></i></NavLink>
                  <i onClick={ ()=> AlertDeletePet( pet._id ) }><TrashAlt width={ 20 } height={ 20 } color={ 'red' }/></i>        
                </Data>
              </li>

            ))
          }
          
          
        </ul>
      </BoxMascotas>
      <CustomModal
        show={ showModal.show }
      >
        <h3>¿Estas seguro que quieres eliminar?</h3>

        <Actions>
          <ButtonDel
            onClick={ deletePet }
          >
            Eliminar
          </ButtonDel>
          <ButtonCancel
            onClick={ hideModal }
          >
            Cancelar
          </ButtonCancel>
        </Actions>
      </CustomModal>  

    </Container>
  )
}
