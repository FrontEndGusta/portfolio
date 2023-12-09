import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  gap: 15px;

  .btn {
    border: 2px solid #090C08;
    box-shadow: 3px 3px ${(props) => props.theme.colors.secundary};
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: none;
  }

  .btn svg {
    color: #090C08;
  }

  .btn:hover {
    color: ${(props) => props.theme.colors.secundary};
    transform: none;
  }

  .btn:active {
    box-shadow: 0px 0px ${(props) => props.theme.colors.secundary};
    transform: translate(3px, 3px);
  }
  
  .icon svg {
    width: 30px;
    height: 30px;
  }
`;
