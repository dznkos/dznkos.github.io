
import styled from "styled-components"

export const Container = styled.div`
  
  display: grid;
  height: 100vh;
  grid-template: 
        "header" 90px  
        "sidebar" 120px       
        "main" auto   
        ;

@media (min-width: 750px) {  
    grid-template: 
        "header header" 100px 
        "sidebar main" auto /
        177px   auto;
}

@media (min-width: 900px) {   
    grid-template: 
        "header header header" 90px             
        "sidebar main main" auto /
        177px   auto   auto;

    /* max-width: 1500px; */
    /* margin: auto; */
}

  > * {
    /* box-shadow: inset 0 0 12px #777;  */
    /* background: #777; */
    /* padding: 20px; */
    text-align: center;
    box-sizing: border-box;
  }

  .header {
    grid-area: header;    
    background-color: #B6956A;    
    /* box-shadow: -2px -2px 10px 0px rgba(0, 0, 0, 1); */
    
  }
  
  .sidebar {
      grid-area: sidebar;
      background-color: #B6956A;
      
  }
  .main {
      grid-area: main;
      background-color: #ffffff;
  }
`
