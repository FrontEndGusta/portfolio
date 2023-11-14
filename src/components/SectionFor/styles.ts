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
    height: 80%;
    width: 80%;
    position: relative; /* Adicionei essa propriedade para garantir que o .card-inner fique na frente dos círculos */
  }

  .circle {
    width: 100px;
    height: 100px;
    background: repeating-linear-gradient(48deg, #3023ae 0%, #ff0099 100%);
    border-radius: 35% 30% 75% 30% / 49% 30% 70% 51%;
    position: absolute;
    animation: move-up6 2s ease-in infinite alternate-reverse;
    z-index: 0 !important; /* Mantenha o z-index menor para que os círculos fiquem atrás do .card-inner */
  }

  .card-center {
    height: 80%;
    width: 80%;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    position: absolute;
    overflow: hidden;
  }

  .circle:nth-child(1) {
    top: -25px;
    left: -25px;
  }

  .circle:nth-child(2) {
    bottom: -25px;
    right: -25px;
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
