import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  
  /* height: 100vh; */
  /* width: 100%; */
  background: rgb(20,30,48);
  background: linear-gradient(90deg, rgba(20,30,48,1) 0%, rgba(36,59,85,1) 100%);
  
  display: flex;

  flex-direction: column;

  align-items: flex-end;

 

  

`

export const NavLinkStyle = styled(NavLink)` 
  width: 182px;
  height: 40px;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 60px;

  background-color: #B6956A;
  
  border-radius: 12px;

  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  display: flex;

  justify-content: center;
  align-items: center;

  box-shadow: 3px 3px 3px 1px #52569b;

  :hover{
      background-color: #5f61de;
    }

`  

export const BoxMascotas = styled.li`
  /* display: inline; */
  /* background-color: #ffffff;  */
  width: 90%;
  height: 100%;

  margin: auto;

  display: flex;

  flex-direction: column;

  justify-content: start;
  

  ul { 
    
  }

  li {
    display: flex;      
    justify-content: space-between;
    align-items: center;

    /* width: 880px; */
    height: 80px;
    border-radius: 12px;
    background-color: #2b274a;

    margin-bottom: 15px;
    box-shadow: 3px 3px 5px 1px #4f4692;
    
  }

  a{
    
    /* width:30px; */
    margin: 0px 8px 0px 8px;
    border-radius: 15px;

    :active {
      background-color: #5fdec0;
    }
    :hover{
      background-color: #5fdec0;
    }
  }


`

export const Data = styled.div`
  
  /* width: 180px; */
  padding: 0px 40px 0px 40px;

  display: flex;

  /* justify-content: space-evenly; */

  h4 {
    font-size: 1.125rem;
    font-weight: normal;
  }

  p { 
    font-size: 1.125rem;
    color: #B6956A;
    padding-right: 15px;
  }

`

export const ButtonDel = styled.button`
  
  width: 30%;  
  min-height: 40px;
  border-radius: 10px;
  background-color: red;
  color: white;
`

export const ButtonCancel = styled.button`
  
  width: 30%;   
  min-height: 40px;  
  border-radius: 10px;
  background-color: #B6956A;
  color: white;
`
export const Actions = styled.div`
  
  display: flex;
`
