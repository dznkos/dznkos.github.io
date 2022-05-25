import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { Container, BoxCreate, Input, Form, TextArea, Select, FileSelector } from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { petAdd, startUploading } from '../../actions/pets';
import { CustomModal } from '../ModalAlert/ModalAlert';

import { AddCircle } from '@styled-icons/fluentui-system-filled/AddCircle'

export const MascotaNew = () => {

  const [showModal, setShowModal] = useState(false);

  const { active } = useSelector( state => state.pets)

  const hideModal = () => {
    setShowModal(false)
  }

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    age: '',
    image_url: 'imageUrl',
    description: '',
    pet_type_id: "627ed00805be0bce81adba20"
  });
  const dispatch = useDispatch();

  const { name, age, image_url,
         description, pet_type_id} = formValues;

  
  const handleCreateNew = (e) => {
    e.preventDefault();

    const img = (active.url) ? active.url : 'imageUrl'; 
    

    dispatch( petAdd(name,
                    age, 
                    img,
                    description,
                    pet_type_id) );
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
      <h1>Crear una nueva mascota</h1>
      <BoxCreate> 
        <Form 
        onSubmit={ handleCreateNew }
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
                (active?.url) 
                ?
                <img src={`${active.url}`} alt='Pet image'
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
            Crear mascota
          </button>      
        </Form>
        
      </BoxCreate>
      <CustomModal
        show={ showModal }
      >
        <h3>Mascota creada exitosamente!</h3>
        <button
          onClick={ hideModal }
        >
          Aceptar
        </button>
      </CustomModal>  
        
      
    </Container>
  )
}