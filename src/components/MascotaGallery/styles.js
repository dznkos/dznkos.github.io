import styled from "styled-components";

import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";

export const Container = styled.div`
  
  /* height: 100vh; */
  width: 80%;
  margin-left: 40px;
  /* background-color: gray; */
  
  display: grid;
  /* padding: 0px 10px 0px 10px; */

  grid-template-columns: repeat( 3, 1fr);
  grid-column-gap: auto;
  grid-row-gap: auto;
  /* padding: 60px; */

  grid-auto-flow: row;
  gap: 4px;
  /* align-content: flex-start; */
  justify-items: center;

  h1 {
    font-size: 2.25rem;
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

  box-shadow: 3px 3px 3px 1px #ccc;

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