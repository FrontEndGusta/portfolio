import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 15px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif
  }

  svg{
    color: ${(props) => props.theme.colors.svg}
  }

  h1 {
    color: ${(props) => props.theme.colors.h1};
    letter-spacing: 2px;
  }

  .popover{
    color: #090C08;
  }

  button {
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 34px;
  padding: 10px 24px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
  transform: scale(1.1);
}
}

button:active{
  transform: scale(.9);
  transition: all 0.2s;
  background-color: blue;
}

   /* Estilização da barra de rolagem */
   ::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem vertical */
  }

  ::-webkit-scrollbar-track {
    background: #919191; /* Cor da área ao redor da barra de rolagem */
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2B2B2B; /* Cor da própria barra de rolagem */
    border-radius: 3px;
  }
  
`;
