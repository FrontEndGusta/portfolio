import styled from "styled-components";

export const CardContainer = styled.div`
  .card {
    width: 350px;
    height: 254px;
    background: ${(props) => props.theme.colors.primary};
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    border-radius: 20px;
    transition: all 0.1s ease-out;
    cursor: pointer;
  }
  .card:hover {
    transform: scale(1.1);
  }
  button {
    color: ${(props) => props.theme.colors.primary};
  }
  button:hover {
    transform: scale(1);
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
  }
  button:active {
    transform: scale(0.9);
    transition: all 0.2s;
  }

  .card h3 {
    z-index: 1;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5;
  }
  .image {
    z-index: 1;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
  }
  .image img {
    border-radius: 20px;
    width: 40%;
  }
  .more {
    z-index: 1;
    margin-top: 3%;
    width: 40%;
  }
  .more p {
    overflow: auto; /* Adiciona uma barra de rolagem quando necessário */
    max-height: 90%; /* Define a altura máxima antes da barra de rolagem aparecer */
    padding: 1px;
    color: ${props => props.theme.colors.primary};
  }
  .more p::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem vertical */
  }

  .technologies {
    z-index: 1;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
  .icons {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .icons svg {
    width: 20px;
    height: 20px;
  }

  .viewMore {
    width: 40%;
    display: flex;
    justify-content: center;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100px;
    background-image: linear-gradient(
      180deg,
      rgb(255, 48, 255),
      rgb(255, 48, 255)
    );
    height: 170%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: "";
    position: absolute;
    background: ${(props) => props.theme.colors.secundary};
    inset: 4px;
    border-radius: 15px;
  }
`;
