import styled from "styled-components";

export const ContainerTeste = styled.div`

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .logos {
    overflow: hidden;
    background: white;
    white-space: nowrap;
    position: relative;
  }

  .logos:before,
  .logos:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
  }

  .logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }

  .logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  }

  .logos:hover .logos-slide {
    animation-play-state: paused;
  }

  .logos-slide {
    display: inline-block;
    animation: 5s slide infinite linear;
  }

  .logos-slide svg {
    height: 70px;
    margin: 0 40px;
  }
`;
