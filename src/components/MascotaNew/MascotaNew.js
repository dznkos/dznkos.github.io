import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { Container, BoxCreate, Input, Form, TextArea, Select, FileSelector } from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { petAdd, petGetTypes, startUploading } from '../../actions/pets';
import { CustomModal } from '../ModalAlert/ModalAlert';

import { AddCircle } from '@styled-icons/fluentui-system-filled/AddCircle'
import { removeError, setError } from '../../actions/ui';
import { Link } from 'react-router-dom';

export const MascotaNew = () => {

  const [showModal, setShowModal] = useState(false);

  const { active, tps } = useSelector( state => state.pets)
  const { msgError } = useSelector( state => state.ui)

  const hideModal = () => {
    setShowModal(false)
  }

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    age: '',
    description: '',
    pet_type_id: ""
  });
  const dispatch = useDispatch();

  const { name, age, description, pet_type_id} = formValues;

  useEffect(() => {
    
    dispatch( petGetTypes() );


  }, [dispatch])
  
  
  const handleCreateNew = (e) => {
    e.preventDefault();

    // const img = (active.url) ? active.url : 'imageUrl'; 
    if ( isFormValid() ){
      dispatch( petAdd(name,
                      age, 
                      active.url,
                      description,
                      pet_type_id) );

      setShowModal( !showModal );
    }
  }

  const isFormValid = () => {

    if ( name.trim().length === 0 ){
      dispatch( setError('Nombre es requerido') )
      return false;
    }
    else if ( description.trim().length === 0){
      dispatch( setError('Description es requerida') )
      console.log(description);
      return false;
    }
    else if ( typeof(active?.url) == "undefined" ){
      dispatch( setError('Imagen es requerida') )
      console.log(active?.url);
      return false;
    }
    else if ( pet_type_id.trim().length === 0 ){
      console.log(pet_type_id);
      dispatch( setError('Tipo es requerida') )
      return false;
    }

    dispatch( removeError());

    return true;
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
      {
        msgError && 
        (
          <div>
            { msgError }
          </div>
        )
      }
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
                name='pet_type_id'
                value={ pet_type_id }
                onChange={ handleInputChange }
                >
                  <option value="" hidden>
                    Tipos de Mascotas
                  </option>
          {
            
            tps?.map( (tipo, i)=> (
              <option key={ tipo._id }
                      value={ tipo._id }>
                {tipo.name}
              </option>              
            ))
          }
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