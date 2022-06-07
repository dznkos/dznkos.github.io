import styled from "styled-components";

export const Container = styled.div`
  
  height: 100vh;
  width: 100%;
  /* background-color: #a4e56f; */
  
  /* position: fixed; */
  /* box-shadow: inset 0 0 12px #777;  */
  /* box-shadow: 0 0 5px 10px #555; */
  
  /* justify-content: center; */

`

export const Nav = styled.nav`

  height: 90px;
  width: 100%;
  
  /* position: relative; */
  display: flex;

  justify-content: end;
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

  :hover {

    background-color: #866d4d;
  }

  :active { 
    background-color: #020100;
  }  

  font-size: 18px;  
  line-height: 22px;
  height: 22px;
  margin-right: 48px;  

`