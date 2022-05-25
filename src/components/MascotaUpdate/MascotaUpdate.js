import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { Container, BoxCreate, Input, Form, TextArea, Select, FileSelector } from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { petAdd, petFind, petUpdate, startUploading } from '../../actions/pets';
import { CustomModal } from '../ModalAlert/ModalAlert';
import { Link, useLocation } from 'react-router-dom';

import { AddCircle } from '@styled-icons/fluentui-system-filled/AddCircle'


export const MascotaUpdate = () => {

  const location = useLocation()
  const { mypet } = location.state
  
  const { active } = useSelector( state => state.pets)

  const dispatch = useDispatch();

  console.log(mypet);

  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false) 

  const preloadedValues = {
    id: mypet._id,
    name: mypet.name,
    age: mypet.age,
    description: mypet.description,
    image_url: mypet.image_url,
    pet_type_id: "627ed00805be0bce81adba20"
  }

  const [ formValues, handleInputChange, reset ] = useForm(preloadedValues);
  
  const { name, age, image_url,
         description, pet_type_id} = formValues;

  const handleUpdatePet = (e) => {
    e.preventDefault();
    
    console.log( formValues )

    if (active?.url){
      dispatch( petUpdate( {...formValues, image_url: active?.url} ))
    }
    else {
      dispatch( petUpdate( formValues ));
    }
    // msg alert
    setShowModal( !showModal );
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
     
    if ( file ) {
      dispatch( startUploading(file) )
      
      
    }
  }

  return (
    <Container>
      <h1>Actualizar datos de mascota</h1>
      <BoxCreate> 
        <Form 
        onSubmit={ handleUpdatePet }
        >
          <Input   
            width="100%"
            height="40px"       
            type="text"
            placeholder='Nombre'
            name='name' 
            autoComplete='off'
            value={ name }
            onChange={ handleInputChange }
          />
          <Select            
            // name='pet_type_id'
            // value={ pet_type_id }
            // onChange={ handleInputChange }
            >
              <option value="" hidden>
                Tipos de Mascotas
              </option>
              <option value="1">Perro</option>
              <option value="2">Gato</option>
          </Select>
          <Input     
            width="100%"
            height="40px"     
            type="text"
            placeholder='Edad'
            name='age' 
            autoComplete='off'
            value={ age }
            onChange={ handleInputChange }
          />   
          <br />       
          <TextArea    
            width="100%"
            height="134px"      
            type="text"
            placeholder='Descripcion'
            name='description' 
            autoComplete='off'
            value={ description }
            onChange={ handleInputChange }
          />  
          <input id="fileSelector"
                 type="file"
                 name='file'
                 style={{ display:'none'}}
                 onChange={ handleFileChange }
          />
          <FileSelector 
            
            onClick={()=> handlePictureClick() } 
          >   
              {
                (mypet?.image_url) 
                ?
                <img src={ (active?.url) ?  (active.url) : (mypet?.image_url) } alt='Pet image'
                  height={180}
                ></img>
                :
                <div>                
                  <p>
                    <AddCircle width={20} height={20} color={ '#bcb9b9' } />
                    Agrega una imagen de tu mascota
                  </p>
                </div>
              }              
              
            
          </FileSelector>

          <button
            type='submit' >
            Actualizar mascota
          </button>      
        </Form>
        
      </BoxCreate>
      <CustomModal
        show={ showModal }
      >
        <h3>Mascota actualizada !</h3>
        <Link to="/mascotas">
          <button
            onClick={ hideModal }
          >
            Aceptar
          </button>
        </Link>
      </CustomModal>         
      
    </Container>
  )
}