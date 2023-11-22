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
    transition: transform 0.5s;
  }

  .btn svg {
    color: ${(props) => props.theme.colors.secundary};
  }

  .btn:hover {
    transform: translateY(-10px);
  }
  .btn:active {
  }

  .icon svg {
    width: 30px;
    height: 30px;
  }
`;
