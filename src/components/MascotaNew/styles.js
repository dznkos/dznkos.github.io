import styled from "styled-components";

export const Container = styled.div`
  
  height: 100vh;
  width: 100%;
  /* background-color: gray; */
  
  display: flex;

  flex-direction: column;

  justify-content: start;
  
  padding: 60px;

  align-items: flex-start;

  h1 {
    font-size: 2.25rem;
  }


  button { 
    width: 182px;
    height: 40px;

    margin-top: 20px;
    margin-right: 60px;
    margin-bottom: 20px;

    background-color: #B6956A;
    border-radius: 12px;

    color: white;
    font-size: 18px;
    font-weight: 500;

    box-shadow: 3px 3px 3px 1px #ccc;
  }

`

export const Input = styled.input`
  
    border: 1px solid #E3E3E3;
    border-bottom: 1px solid $light-grey;
    background: #FFFFFF;

    max-width: 345px;
    
    margin-right: 5px;
    margin-top: 12px;
    margin-bottom: 8px;

    padding-left: 8px;
    transition: border-bottom .3s ease;
    &:focus {
        border-bottom: 1px solid $primary;
        outline: none;
    }

    width:  ${props => props.width ? props.width : 'auto'};
    /* width: 345px; */
    /* height: 40px; */
    height: ${props => props.height ? props.height : 'auto'};

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

export const TextArea = styled.textarea`
  
    border: 1px solid #E3E3E3;
    border-bottom: 1px solid $light-grey;
    background: #FFFFFF;
    
    max-width: 715px;
    
    padding-top: 10px;
    padding-left: 8px;
    transition: border-bottom .3s ease;
    &:focus {
        border-bottom: 1px solid $primary;
        outline: none;
    }

    width:  ${props => props.width ? props.width : 'auto'};
    /* width: 345px; */
    /* height: 40px; */
    height: ${props => props.height ? props.height : 'auto'};

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

export const Select = styled.select`

  position: relative;
  
  /* width: 60% ; */
  min-width: 345px;
  max-width: 345px;
  height: 40px;
  background: #FFFFFF;

  border-bottom: 1px solid #E3E3E3;
  color: #E3E3E3;

  option {
    color: #B6956A;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  :focus {
      border: 2px solid #B6956A;
      color: #B6956A;
    }

`

export const Form = styled.form`
    /* display: inline-block; */
    

`

export const BoxCreate = styled.div`

/* height: 550px; */
  /* background-color: blue; */
  width: 100%;
  max-width: 750px;
  /* background-color :blue ; */
  text-align: start;
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  
`

export const FileSelector = styled.div`
    width: auto;
    height: 100%;
    max-height:180px;

    display: flex;
  
    div {
      width: 100%;
      border: 2.2px solid #E3E3E3;
      background: #FFFFFF;
      border-style: dashed;
      height: 100%;
      display: flex;

      justify-content: center;
      
      align-items: center;

      p {
        padding-left: 6px;
        color: #E3E3E3;
      }
    }
`