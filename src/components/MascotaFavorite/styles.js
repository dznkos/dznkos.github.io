import styled from "styled-components";

import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import fondopet from '../../assets/images/fondoDetalle.jpg';

export const Container = styled.div`

  /* display: flex; */
  
  height: 100vh;
  width: 100%;
  /* margin-left: 40px; */
  background: rgb(243,144,79);
  background: linear-gradient(90deg, rgba(213,134,79,1) 0%, rgba(59,67,113,1) 100%);


  text-align: start;
 
  /* padding-left: 40px;
  padding-top: 40px; */


  h1{
    font-size: 2.2rem;
    padding-top: 40px;
    padding-left: 40px;
  }
 
  div {
    width: 100%;
  }
`
export const GalleryBox = styled.div`
  
  /* height: 100vh; */
  width: 100%;
  margin-bottom: 40px;
  /* background-color: gray; */
  
  display: grid;
  /* padding: 0px 10px 0px 10px; */

  grid-template-columns: repeat( 1, 1fr);
  grid-column-gap: auto;
  grid-row-gap: auto;
  /* padding: 60px; */

  grid-auto-flow: row;
  gap: 4px;
  /* align-content: flex-start; */
  justify-items: center;

  @media (min-width: 480px) { 
    grid-template-columns: repeat( 1, 1fr);
  }

  @media (min-width: 768px) {  
    
    grid-template-columns: repeat( 2, 1fr);
  }

  @media (min-width: 1024px) {  
    grid-template-columns: repeat( 3, 1fr);
    padding-right: 40px;
  }

  h1 {
    font-size: 2.25rem;
  } 

  div {
    width: 100%;
  }
`

export const BoxMascota = styled.div`

  display: flex;
  margin-top: 45px;

  position:relative;
  
  width: 70%;
  max-width: 230px;
  min-width: 220px;
  height: 250px;
  max-height: 270px;
  border-radius: 25px;

  box-shadow: 3px 3px 3px 1px #3f3f3f;

`

export const PhotoPet = styled.img`
  
  height: 100%;
  width: 100%;
  position: absolute;

  border-radius: 25px;
  
  object-fit: cover;

  /* background-image: ${({url}) => `url(${url})`};  */

`

export const NamePet = styled.div`
  
  height: 20%;
  width: 100%;
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 15px;
  
  align-self: end;
  position: absolute;
  font-style: bold;
  font-size: 18px;
  border-radius: 0px 0px 25px 25px;
  
  background: rgba(24, 22, 15, .3);;
  color: #ffffff;
`

export const StyledFavoriteIcon = styled(FavoriteIcon)`

  position: absolute;
  right: 10px;
  top: 10px;
  
  /* text-align: center; */
  

  width: 20px;
  /* max-width: 100%; */
  height: ${({ height }) => height || "20px" };

  & path {
    fill: ${({ color }) => color || "grey" };
  }
  &:hover path {
    fill: ${({ hoverColor }) => hoverColor || "red" };
  }

`

export const StyledFavoriteDetail = styled(FavoriteIcon)`

  position: absolute;
  left: 30px;
  top: 30px;
  
  /* text-align: center; */
  

  width: 20px;
  /* max-width: 100%; */
  height: ${({ height }) => height || "20px" };

  & path {
    fill: ${({ color }) => color || "grey" };
  }
  &:hover path {
    fill: ${({ hoverColor }) => hoverColor || "red" };
  }

`

export const ImagePet = styled.img`

  /* position: absolute; */
  /* width: 60%; */
  max-width: 60%; 
  min-height: 320px;

  border-radius: 1.9rem 0 0 1.9rem;  
  object-fit: cover;

  @media (max-width: 950px) { 
    width: 100%;
    height: 100%;
    /* margin: 0 auto; */
    max-width: none; 
    min-height: none;
    

    border-radius: 1.9rem 1.9rem 1.9rem 1.9rem;

  }
  
`

export const DataPet = styled.div`

  position: relative;
  display: flex;

  padding: 1.2rem;
  text-align: justify;
  
  flex-direction: column;

  justify-content: start;

  @media (max-width: 950px) { 
    position: absolute;
    margin-top: 50px;
  }


  h4 {
    padding: 5px 12px 5px 12px;
    margin-bottom: 25px;
    border-radius: 5px;
    color: var(--textAbout);
    background: rgba(21, 21 ,21 ,0.6);
    text-align: center;
  }

  p{
    text-align: start;
    color: var(--textAbout);
    border-radius: 5px;
    background: rgba(21, 21 ,21 ,0.6)
  }

`

export const AgePet = styled.div`
  text-align: center;
  top: 40px;
  right: 45px;
  color: var(--textAbout);
  border-radius: 5px;
  background: rgba(21, 21 ,21 ,0.6);

`

export const MyCloseIcon = styled(CloseIcon)`

  position: absolute;
  top: 15px;
  right: 15px;
  
  width: 35px;
  height: 35px;
  padding: 5px;
  border-radius: 15px;
  background-color: rgba( 52,52,52, 0.1);

  & path {
    fill: ${({ color }) => color || "grey" };
  }
  &:hover path {
    fill: ${({ hoverColor }) => hoverColor || "black" };
  }

` 


export const ModalDiv = styled.div`
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
export const BodyDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

`

export const ContentDiv = styled.div`
  position: relative;
  background: url(${fondopet});
  background-size: cover;
  

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