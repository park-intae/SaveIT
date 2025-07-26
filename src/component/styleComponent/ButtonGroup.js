import styled from "styled-components"

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 5px;

    button {
      padding: 0;
      border-radius: 100%;
      width: 20px;
      height: 20px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-content: center;
      
        img{
            margin: auto;      
        }
    }
        
    .close {
        border: 2px solid #F5866E;
        background-color: white;
    
        &:hover{ 
            background-color: #f5866e;
                
            img{
                filter: invert(100%);
            }
        }
    }
`;

export default ButtonGroup;