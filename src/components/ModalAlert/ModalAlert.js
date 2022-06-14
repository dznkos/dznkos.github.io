import React from "react";
import styled from 'styled-components';

const ModalDiv = styled.div`
  display: ${ p => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

`


const ContentDiv = styled.div`
  position: fixed;
  background: white;
  width: 50%;
  max-width: 675px;
  height: auto;
  min-height: 200px;
  border-radius:2rem;
  top: 50%;
  left: 50%;
  padding: 1rem;
  transform: translate(-50%, -50%);

  display: flex;

  flex-direction: column;

  justify-content: space-evenly;

  /* align-items: center; */

  button {
    margin: 0 auto;
  }
  

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    
  }

`

export const CustomModal = (
  {
    show,
    children
  }
) => {
  return (
    <ModalDiv block={show ? 'block': 'none'}>
      <ContentDiv>
        { children }        
      </ContentDiv>
    </ModalDiv>
  )
}