import React, { useEffect, useState } from 'react'
import { BoxMascota, Container, NamePet, PhotoPet, StyledFavoriteIcon } from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { petDelete, petsStartLoading, petClearActive, petGetTypes, petAddFavorite, petRemoveFavorite } from '../../actions/pets';


export const MascotaFavorite = () => {

  const dispatch = useDispatch();
  const { pets } = useSelector( state => state.pets)
  const { tps } = useSelector( state => state.pets)

  const initStatePet = {
    petid: '',
    show: false
  }

  const [showModal, setShowModal] = useState(initStatePet);

  const [Like, setLike] = useState({});

  const hideModal = () => {
    setShowModal(initStatePet)
  }

  const handleFavorite = (id, tag)=> {   

    if ( tag ) {
      // setLike( false );
      dispatch( petRemoveFavorite(id) );
    }
    else {
      // setLike( true );
      dispatch( petAddFavorite(id) );
    }

  }

  useEffect(() => {
    
    dispatch( petsStartLoading() );    
    dispatch( petGetTypes() );

  }, [ dispatch ]) 

  // console.log(pets)
  // console.log(tps)

  return (
    <Container>      
    {
      pets?.filter( (obj) => obj.tagFav == true ).map( (pet, i) => (
        <BoxMascota key={ pet._id} >
          <PhotoPet src={pet.image_url} ></PhotoPet>
          <NamePet>{pet.name} - { tps?.filter( (tp) => (tp._id == pet.pet_type_id) ).map( obj => obj.name )  }</NamePet>
          
          <StyledFavoriteIcon 
            hoverColor={ pet.tagFav ? "black" : "red" } 
            color={ pet.tagFav ? "red" : "black" }  
            onClick={ ()=> handleFavorite( pet._id, pet.tagFav )}
          />
          
        </BoxMascota>
      
      ))
    }
    </Container>
  )
}
