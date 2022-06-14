import React, { useEffect, useState } from 'react'
import { BoxMascota, Container, GalleryBox, 
          NamePet, PhotoPet, StyledFavoriteIcon,
          DataPet, ImagePet, MyCloseIcon, 
          StyledFavoriteDetail,
          AgePet, ModalDiv, BodyDiv, 
          ContentDiv } from './styles'

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

  const [showModal, setShowModal] = useState(false);

  const [PetDetail, setPetDetail] = useState([])
  
  const { _id, name, 
          pet_type_id, 
          tagFav,
          age, 
          description, 
          image_url  } = PetDetail;


  const hideModal = () => {
    setShowModal(!showModal)
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
  const handleDetalle = (sId) => {
    
    const petDet = pets?.find( (obj)=> obj._id == sId )

    setPetDetail({...petDet});
    setShowModal(!showModal)
    console.log(petDet);
    console.log(PetDetail);
    
  }  

  useEffect(() => {
    
    dispatch( petsStartLoading() );    
    dispatch( petGetTypes() );

  }, [ dispatch ]) 

  // console.log(pets)
  // console.log(tps)

  const listpets = pets?.filter( (obj) => obj.tagFav == true );
  console.log(listpets);

  return (
    <Container>    
    {    
      (listpets.length != 0)
      ?
      <GalleryBox>    
      {
        listpets.map( (pet, i) => (
          <BoxMascota key={ pet._id} >
            <PhotoPet src={pet.image_url} onClick={ ()=> handleDetalle(pet._id)} ></PhotoPet>
            <NamePet>{pet.name} - { tps?.filter( (tp) => (tp._id == pet.pet_type_id) ).map( obj => obj.name )  }</NamePet>
            <StyledFavoriteIcon 
              hoverColor={ pet.tagFav ? "black" : "red" } 
              color={ pet.tagFav ? "red" : "black" }  
              onClick={ ()=> handleFavorite( pet._id, pet.tagFav )}
            />          
          </BoxMascota>      
        ))
      }
      </GalleryBox>    
      :
      <div>
        <h1>Aun no tienes mascotas favoritas.</h1>
      </div>    
    }
      <ModalDiv block={ showModal ? 'block': 'none'} >
        <BodyDiv>
          {        
            <ContentDiv>         
              <ImagePet src={ image_url }/>
              <StyledFavoriteDetail 
                  hoverColor={ tagFav ? "black" : "red" } 
                  color={ tagFav ? "red" : "black" }  
                  onClick={ ()=> handleFavorite( _id, tagFav )}
                />
                <DataPet>
                  <h4>{ name } - { tps?.filter( (tp) => (tp._id == pet_type_id) ).map( obj => obj.name )  }</h4>
                  <AgePet>{ age } meses</AgePet><br />
                  <p>{ description } </p>
                </DataPet>
                        
              <MyCloseIcon onClick={ ()=> hideModal() }/>        
            </ContentDiv>        
          
          }
        </BodyDiv>      
      </ModalDiv> 
    </Container>
  )
}
