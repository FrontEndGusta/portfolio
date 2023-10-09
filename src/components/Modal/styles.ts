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

const modalCloseAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
    z-index: 1;
    top: 0;
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
    z-index: -1;
    top: -200px;
  }
`;

export const ModalContainer = styled.div`
  /* styles.css */
  .modal {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro transparente */
    z-index: 1000; /* Coloca o modal acima de outros elementos */
    animation: ${modalOpenAnimation} 0.3s ease-in-out; /* Aplica a animação de abertura */
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 50%;
    height: 50%;
    overflow-y: auto; /* Adiciona uma barra de rolagem se o conteúdo for muito longo */
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-header h2{
    color: #090C08;
  }
  .modal-header svg{
    color: black;
  }
  .modal-header svg:hover {
    color: #a3a3a3;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

 /* Adicione esta classe CSS ao seu arquivo de estilos */
.close-button {
  opacity: 1;
  transition: opacity 0.3s ease; /* Adicione uma transição de opacidade suave ao botão */
}

.close-button.hide {
  opacity: 0; /* Tornar o botão de fechamento invisível durante o fechamento */
}


  /* Adicione mais estilos conforme necessário */
`;
