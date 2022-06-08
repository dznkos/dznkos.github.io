import styled from "styled-components";

import myImage from '../../../assets/images/LoginBackground.png'

export const Container = styled.div`
  
  background-image: url(${myImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100vw;
  position: relative;

`

export const LoginBox = styled.div`

  background-color: rgb(250, 250, 250, 0.15);
  height: 30%;
  width: 80%;
  /* margin: 120px 0px 0px 70px; */
  position: absolute;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  margin-left: 10%;
  margin-top: 11%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-content: center;

  text-align: center;

  @media (max-width: 480px) { 
    
    /* height: 50%; */
    width: 95%;
    margin-left: 3%;
    margin-top: 50%;

  }
  
  @media (min-width: 480px) { 
    
    height: 251px;
    width: 326px;

    margin-left: 4%;
  }

  @media (min-width: 768px) {  
    height: 271px;
    width: 446px;
  }

  @media (min-width: 1024px) {   
    height: 251px;
    width: 416px;
      /* max-width: 1500px; */
      /* margin: auto; */
  }

  
`
export const LoginText = styled.h2`
    
    width: 100%;
    padding-bottom: 5px;
    font-size: 1.5rem;
    font-weight: bold;
    /* text-align: center; */
`

export const Input = styled.input`
  
    border: 1px solid #E3E3E3;
    border-bottom: 1px solid $light-grey;
    background: #FFFFFF;
    
    margin-top: 8px;
    padding-left: 8px;
    transition: border-bottom .3s ease;
    &:focus {
        border-bottom: 1px solid $primary;
        outline: none;
    }

    width: 100%;
    height: 40px;

    ::placeholder {
      color: #E3E3E3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.017em;
      display: flex;
      align-items: center;  
    }

    :focus {
      border: 2px solid #B6956A;
      color: #B6956A;
    }

    :focus::placeholder {
      color: #B6956A;
    }
`

export const Form = styled.form`
    display: inline-block;
    height: 100%;
    margin: 40px;

`

export const Error = styled.div`

    width: 100%;

    font-style: normal;
    font-weight: 400;
    font-size: 0.57rem;
    line-height: 15px;
    padding: 3px;

    letter-spacing: -0.017em;

    color: #FF0000;
    text-align: start;


`

export const Button = styled.button`
    
  width: 100%;
  height: 40px;

  background-color: #B6956A;
  border: 1px solid #E3E3E3;

  color: #FFFFFF;
  font-weight: 700;
  font-size: 1.125rem;
  /* line-height: 22px; */

  :hover {

    background-color: #c6910a;
  }

  :active { 
    background-color: #020100;
  }  

  @media (max-width: 480px) { 
    
    background: rgba(231, 172, 24, 0.424);;
  }

`

