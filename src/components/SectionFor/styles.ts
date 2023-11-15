import styled from "styled-components";

export const ContainerSectionFor = styled.div`
  .contact {
    height: 100vh;
  }

  .card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-inner {
    height: 70%;
    width: 70%;
    position: relative;
    box-shadow: ${props => props.theme.colors.shadow};
  }

  .circle {
    width: 100px;
    height: 100px;
    background: ${props => props.theme.colors.primary};
    clip-path: polygon(25% 33%, 85% 13%, 48% 37%, 62% 48%, 81% 60%, 17% 85%, 51% 58%);
    position: absolute;
    animation: move-up6 2s ease-in infinite alternate-reverse;
    z-index: 0 !important; /* Mantenha o z-index menor para que os círculos fiquem atrás do .card-inner */
  }

  .card-center {
    height: 70%;
    width: 70%;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    position: absolute;
    overflow: hidden;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
  }
  .card-center p{
    text-align:center;
  }

  .circle:nth-child(1) {
    top: -40px;
    left: -55px;
  }

  .circle:nth-child(2) {
    bottom: -40px;
    right: -55px;
    animation-name: move-down1;
  }
  @keyframes move-up6 {
    to {
      transform: translateY(-10px);
    }
  }

  @keyframes move-down1 {
    to {
      transform: translateY(10px);
    }
  }

  
`;
