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
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    text-align: center;
    color: black;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 1.5em;
  }
  .close svg{
    color: black;
  }
  .close svg:hover {
    color: #a3a3a3;
  }
`;

export const VideoContainer = styled.div`
  /* Estilize o container do vídeo aqui, por exemplo, definindo uma altura máxima */
  height: 50vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 20px;

  iframe {
    width: 100%;
    height: 100%;
  }
  .videoIframe {
    width: 60%;
  }
  .description {
    width: 40%;
  }
  p{
    color: black;
    opacity: .9;
  }

   @media (width <= 768px) {
   flex-direction: column;
   align-items: center;

   .videoIframe{
    width: 100%;
   }

   .description{
    width: 100%;
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
   width : 100% ;
   align-items: center;
  }

  button {
    /* Estilize os botões conforme necessário */
    border: 2px solid #090C08;
    cursor: pointer;
    
    &:hover {
      background-color: #090C08;
      color: #FFFFFF;
    }
  }
`;
