import styled from 'styled-components'

import { font, media } from '../../../config/styles'

export const Wrapper = styled.div`  
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid gainsboro;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  img{
    margin-top: -120px;
  }
  
  h1{
    font-family: ${font.family.title};
  }
  
  p{
    cursor: pointer;
    color: #1678C2;
    transition: 0.5s;   
    
    :hover{
      opacity: 0.8;
    }
  }
  
  &&{
    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      button, .field{
        width: 140%;      
        @media(${media.laptop}){
          width: 200%;
        }
      }    
    }
  }
`
