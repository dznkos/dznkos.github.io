import styled from "styled-components";

import { NavLink as BaseNavLink } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #B6956A;
`

// export const NavLink = styled(BaseNavLink)`
//   display: flex;
//   align-items: center;
//   font-size: 18px;
//   color: #fff;
//   font-weight: 600;
//   text-decoration: none;
//   padding:8px 3px;
//   width: 100%;

//   &.active{
//     color: #5d5d5d
//   }
// `

// export const MenuUl = styled.ul`
  
//   list-style: none;
//   display: flex;
//   flex-direction: column;

//   margin-top:10px;

//   align-items: center;

//   li {

//     :active {      
//       font-weight: 600;
//     }
//   } 
// `

export const StyleUl = styled.ul`

  display: flex;
  
  a{
    text-decoration: none;
  }

  li {
    list-style: none;
    padding: 16px 10px;
    color: #ffffff;
    font-size: 18px;
    line-height: 22px;
  }
  
  .current {
    li {
      border-bottom: 1px solid blue;
    }
  }

  flex-direction: column;
  /* align-items: center; */
  /* text-align: center; */
`

