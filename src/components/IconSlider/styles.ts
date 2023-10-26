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
    background: ${props => props.theme.colors.secundary};
    white-space: nowrap;
    position: relative;
    margin: 35px 0;
    padding: 10px;
    border-radius: 5px; /* Adicione bordas arredondadas */
    box-shadow: ${props => props.theme.colors.shadow} /* Ajuste os valores da sombra para torná-la mais escura */
  }

  .logos:hover .logos-slide {
    animation-play-state: paused;
  }

  .logos-slide {
    display: inline-block;
    animation: 5s slide infinite linear;
  }

  .slides{
    display: inline-block;
  }

  .technology-name{
    color: ${props => props.theme.colors.primary};
  }

  .logos-slide svg {
    height: 85px;
    margin: 0 40px;
    width: 85px;
    color: ${props => props.theme.colors.primary}
  }

`
