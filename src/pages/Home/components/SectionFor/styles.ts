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
    height: 75%;
    width: 75%;
    position: relative;
    border-radius: 8px;
    background: ${props => props.theme.colors.card};
  }

  .circle {
    width: 100px;
    height: 100px;
    background: ${props => props.theme.colors.card};
    border-radius: 8px;
    position: absolute;
    animation: move-up6 1s ease-in-out infinite alternate-reverse;
    z-index: 0 !important; /* Mantenha o z-index menor para que os círculos fiquem atrás do .card-inner */
  }

  .card-center {
    height: 75%;
    width: 75%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position: absolute;
    overflow: auto;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    flex-direction: column;
    color: ${props => props.theme.colors.secundary};
  }
  .card-center p{
    text-align:center;
    color: ${props => props.theme.colors.secundary};
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
