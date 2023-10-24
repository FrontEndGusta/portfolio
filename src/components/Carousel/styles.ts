import styled from "styled-components";

export const ContainerCarousel = styled.div`
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
  .carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
  }

  .carousel {
    display: flex;
    width: 300px; /* Largura do contêiner do carrossel (ajustada para 200px) */
    animation: 5s slide infinite linear;
  }

  .carousel-slide {
    transition: transform 0.5s ease;
    width: 100%; /* Garante que cada slide ocupe a largura total do contêiner */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-image {
    margin-left: 20px;
    width: 100px; /* Largura da imagem 100% para preencher o slide */
    height: auto; /* Altura automática */
    filter: brightness(0.7); /* Reduz o brilho das imagens não ativas */
    transition: filter 0.5s ease; /* Aplica uma transição suave para o filtro */
  }

  .carousel svg{
    width: 80px;
    height: 80px;
  }

  .carousel-slide.active {
    transform: translateX(0);
  }

  .carousel-slide.active .carousel-image {
    filter: brightness(1); /* Mantém o brilho normal para a imagem ativa */
    transition: filter 0.5s ease; /* Adicione uma transição suave para o filtro */
  }

  .carousel-slide.active .carousel-image:hover {
    transform: scale(1.2); /* Efeito de escala ao passar o mouse sobre a imagem ativa */
    transition: transform 0.5s ease; /* Adicione uma transição suave para o efeito de escala */
  }
  .buttons{
    display: flex;
    gap:15px;
  }
  .buttons button{
    padding: 5px 10px;
  }
`