import styled from "styled-components";

export const Container = styled.div`
  
  height: 100%;
  width: 100%;
  /* background-color: #a4e56f; */
  
  /* box-shadow: inset 0 0 12px #777;  */
  /* box-shadow: 0 0 5px 10px #555; */
  display: flex;
  justify-content: end;

`

export const Nav = styled.nav`

  height: 100px;
  width: 200px;
  
  /* position: relative; */
  display: flex;
  margin-right: 48px; 
  justify-content: center;
  align-items : center;

  h1 {
    margin-right: 8px;
    font-size: 0.7rem;
    color: black;
    
  }

`

export const Logout = styled.button`

  background-color: #B6956A;
  color: #FFFFFF;
  font-weight: 700;
  padding: 5px;
  font-size: 16px;  
  line-height: 12px;
  height: 42px;
  border-radius: 12px;

  :hover {    
    background-color: #866d4d;
  }

  :active { 
    background-color: #020100;
  }  

  
   

`