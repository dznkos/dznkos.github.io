import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyles from '../../../styles/GlobalStyles'
import { useForm } from '../../../hooks/useForm';



import { Button, Container, 
         Error, Form, Input, 
         LoginBox, LoginText } from './styles'
import { authRemoveError, startLoginEmailPassword } from '../../../actions/auth';
import ConfirmationModal from '../../../DialogAlert/ModalAlert';


export const LoginScreen = () => {

  const dispatch = useDispatch();
  const load  = useSelector( state => state.auth);
  const loading = useSelector( state => state.ui);

  // console.log(load);

  const [ formValues, handleInputChange ] = useForm({
    email: 'admin@gmail.com',
    password: '123123'
  });

  const initialState = false;
  const { email, password} = formValues;

  const [show, setShow] = useState(initialState);
  // const [hideModal, sethideModal] = useState(initialState);

  const [errorMessages, setErrorMessages] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password) )
    // setShow( true )

    dispatch( authRemoveError() )


  }

  const hideModal = (arg) => {
    setShow(false);
    // actOnModalResult(arg);
};


  return (
    <>
    <Container>
      <LoginBox>
        
        <Form 
        onSubmit={ handleLogin }
        // className='animate__animated animate__fadeIn animate__faster'
        >
        <LoginText>Ingresa</LoginText>
        <Input          
          type="text"
          placeholder='Correo electronico'
          name='email' 
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
        <Input 
          type="password"
          placeholder='Contraseña'
          name='password' 
          value={ password }
          onChange={ handleInputChange }
        />
        {
          (load.error) 
          ? <Error> Usuario no existente</Error>
          : <Error> </Error>
        }
        
        <Button 
          type='submit' 
          // disabled={ loading }
        >
          Iniciar sesion
        </Button>
        
        {/* <Link to='/auth/register' className='link'>
          Create new account
        </Link> */}

      </Form>
      </LoginBox>
    </Container>
    <ConfirmationModal show={show} headerText="Confirm delete item?"
                    handleClose={hideModal} >
        {`Permanently delete ?`}
    </ConfirmationModal>
    <GlobalStyles/>
    </>
  )
}
