import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  gap: 15px;

  .btn {
    border: 2px solid ${(props) => props.theme.colors.secundary};
    box-shadow: 3px 3px ${(props) => props.theme.colors.secundary};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: none;
  }

  .btn svg {
    color: ${(props) => props.theme.colors.secundary};
  }

  .btn:hover {
    color: ${(props) => props.theme.colors.secundary};
    transform: none;
  }

  .btn:active {
    box-shadow: 0px 0px ${(props) => props.theme.colors.secundary};
    transform: translate(3px, 3px);
    background-color: ${(props) => props.theme.colors.primary};
  }

  .icon {
    border: 2px solid ${(props) => props.theme.colors.secundary};
    box-shadow: 3px 3px ${(props) => props.theme.colors.secundary};
  }

  .icon svg {
    width: 30px;
    height: 30px;
  }
`;
