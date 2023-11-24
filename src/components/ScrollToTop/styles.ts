import styled from "styled-components";

export const ContainerScrollToTop = styled.div`
  .scrollToTop {
    position: fixed;
    bottom: 20px;
    height: 40px;
    width: 40px;
    min-width: 30px;
    min-height: 30px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    transition: all 0.1s ease-in-out;
    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};
      svg {
        color: ${(props) =>
          props.theme.colors
            .secundary}; 
      }
    }
  }
  .scrollToTop svg {
    height: 30px;
    width: 30px;
    animation: arrowTop 0.9s ease infinite;
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
    50%{
      transform: translateY(-2px);
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
