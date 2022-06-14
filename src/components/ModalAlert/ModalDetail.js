import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { petsStartLoading } from "../../actions/pets";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";


const ModalDiv = styled.div`
  display: ${ p => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  
  /* justify-content: center;
  align-items: center; */

`
const BodyDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

`

const ContentDiv = styled.div`
  position: relative;
  background: white;

  width: 80%;
  
  max-width: 760px;

  height: 250px;
  min-height: 600px;  
  
  @media (max-width: 950px) {  

    width: 100%;
    max-width: 445px;

  }

  
  /* transform: translate(10%, 10%); */

  border-radius: 2rem;

  box-sizing: border-box;
  display: flex;

  flex-direction: row;
  align-self: center;

  justify-content: start;

  /* align-items: center; */

  button {
    margin: 0 auto;
  } 

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    
  }
`

export const CustomModalDetail = (
  {
    show,
    children
  }
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch( petsStartLoading() );

  }, [ dispatch ]) 

 

  return (
    <ModalDiv block={show ? 'block': 'none'} >
      <BodyDiv>
        <ContentDiv>
            { children } 
        </ContentDiv>
      </BodyDiv>      
    </ModalDiv>
  )
}