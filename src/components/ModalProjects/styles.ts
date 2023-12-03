import styled, { keyframes } from "styled-components";

// Define as animações usando keyframes
const modalOpenAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
    z-index: -1;
    top: -100px;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    z-index: 1;
    top: 0;
  }
  `;

export const ModalVideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${modalOpenAnimation} 0.3s ease-in-out; /* Aplica a animação de abertura */
`;

export const ModalContent = styled.div`
  /* Estilize o conteúdo interno do modal aqui, por exemplo, com um fundo branco e bordas arredondadas */
  background: white;
  border-radius: 10px;
  position: relative;
  padding: 20px;
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .titleModal {
    height: 20px;
    text-align: center;
    margin: 0px 0 20px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 1.5em;
  }
  .close svg {
    color: black;
  }
  .close svg:hover {
    color: #a3a3a3;
  }
  @media (width <= 768px) {
    height: 80%;
  }
`;

export const VideoContainer = styled.div`
  /* Estilize o container do vídeo aqui, por exemplo, definindo uma altura máxima */
  /* height: 50vh; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  gap: 20px;

  .description {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 10px;
  }
  .carrousel {
    height: 100%;
    width: 60%;
  }
  .textDescription {
    height: 100%;
    width: 40%;
    display: flex;
    text-align: center;
    align-items: center;
    text-align: center;
  }
  p {
    color: black;
    opacity: 0.9;
  }

  @media (width <= 768px) {
    overflow: auto;
    &::-webkit-scrollbar {width: 3px;}
    .carrousel {
      height: 80%;
      width: 100%;
    }
    .textDescription {
      height: 100%;
      width: 100%;
      margin-top: 10px;
    }
    .textDescription p {
      width: 100%;
      height: 100%;
    }
    .description {
      flex-direction: column;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
`;

export const ButtonContainer = styled.div`
  /* Estilize o container de botões aqui, por exemplo, alinhando-os horizontalmente */
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  gap: 10px;
  margin-top: 20px;

  @media (width <= 768px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
    button {
      width: 100%;
      justify-content: center;
    }
  }

  button {
    /* Estilize os botões conforme necessário */
    border: 2px solid #090c08;
    cursor: pointer;

    &:hover {
      background-color: #090c08;
      color: #ffffff;
    }
  }
`;
