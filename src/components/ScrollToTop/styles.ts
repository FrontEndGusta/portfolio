import styled from "styled-components";

export const ContainerScrollToTop = styled.div`
  .scrollToTop {
    position: fixed;
    bottom: 20px;
    height: 50px;
    width: 50px;
    min-width: 30px;
    min-height: 30px;
    right: 10px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    transition: all 0.1s ease-in-out;
    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};
      svg {
        color: ${(props) =>
          props.theme.colors
            .secundary}; /* Altera a cor de preenchimento do ícone para preto */
      }
    }
  }
  .scrollToTop svg {
    margin-top: 3px;
    height: 30px;
    width: 30px;
    animation: arrowTop 0.9s linear infinite;
  }

  .scrollToTop:hover {
    transform: scale(1.1);
  }
  .scrollToTop:active {
    transform: scale(0.9);
  }

  @keyframes arrowTop {
    0%,
    100% {
      transform: translateY(0);
    }
    50%,
    60% {
      transform: translateY(-3px);
    }
  }

  @media (width <= 567px) {
    .scrollToTop{
        width: 40px;
        height: 40px;
        right: 5px;
    }
    .scrollToTop svg{
        height: 20px;
        width: 20px;
    }
  }
`;
