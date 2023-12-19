import styled from "styled-components";

export const ContainerSectionFor = styled.div`
  @keyframes scale-in-top {
    0% {
      transform: scale(0);
      transform-origin: 50% 0;
      opacity: 1;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 0;
      opacity: 1;
    }
  }

  .contact {
    height: 100vh;
  }

  .forms {
    padding-top: 20px;
    height: 100vh;
    opacity: 0;
  }

  .visible {
    animation: scale-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    opacity: 1;
  }

  .card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-inner {
    height: 75%;
    width: 75%;
    position: relative;
    border-radius: 8px;
  }

  .circle {
    width: 100px;
    height: 100px;
    background: ${(props) => props.theme.colors.card};
    border-radius: 8px;
    position: absolute;
    animation: move-up6 1s ease-in-out infinite alternate-reverse;
    box-shadow: 0 0 3px ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
  }

  .card-center {
    width: 90%;
    background: ${(props) => props.theme.colors.card};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position: absolute;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    color: ${(props) => props.theme.colors.secundary};
    box-shadow: 0 0 3px ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
  }

  .card-center::-webkit-scrollbar {
    width: 5px;
  }
  .card-center p {
    text-align: center;
    color: ${(props) => props.theme.colors.secundary};
  }

  .circle:nth-child(1) {
    top: -40px;
    left: -50px;
  }

  .circle:nth-child(2) {
    bottom: -40px;
    right: -50px;
  }
  @keyframes move-up6 {
    to {
      transform: translateY(-13px);
    }
  }

  @media (width <= 720px) {
    .circle {
      width: 80px;
      height: 80px;
    }

  }
`;
