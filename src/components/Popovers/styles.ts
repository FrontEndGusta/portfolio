import styled from "styled-components";

export const PopoversContainer = styled.div`
  :root {
    --popover-height: 36px;
  }
  .nav {
    position: fixed;
    top: 50%;
    right: -10px;
    translate: 0 -50%;
    display: grid;
    place-items: center;
    gap: 8px;
    padding: 20px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .nav .btn-bubble,
  .nav .btn-favorite {
    position: relative;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #e7e7e9;
    background: ${(props) => props.theme.colors.background};
    font-family: inherit;
    padding: 0;
    cursor: inherit;
  }

  .nav .btn-bubble::before,
  .nav .btn-favorite::before {
    content: attr(data-tooltip);
    position: absolute;
    top: 50%;
    right: 42px;
    translate: 6px -50%;
    opacity: 0;
    visibility: hidden;
    background: ${(props) => props.theme.colors.background_popover};
    color: ${(props) => props.theme.colors.text_popover};
    padding: 3px 6px;
    font-size: 12px;
    border-radius: 4px;
    transition: 0.3s;
  }

  .nav .btn-bubble:hover::before,
  .nav .btn-favorite:hover::before {
    opacity: 1;
    visibility: visible;
    translate: 0 -50%;
  }

  .material-symbols-outlined {
    font-size: 18px;
  }

  h2,
  h3 {
    margin: 0;
    font-weight: 400;
    text-align: left;
  }

  .containerIcons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    position: relative;
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 15%;
    flex-wrap: wrap;
    border-bottom: 2px solid black;
    padding: 10px 15px;
    border-radius: 50px;
  }

  /* Ícone do Gmail */
  .icons > :nth-child(4):hover {
    background-color: rgb(221, 157, 185);
  }

  /* Ícone do LinkedIn */
  .icons > :nth-child(2):hover {
    background-color: #47a0d5; /* Azul mais claro */
  }

  /* Ícone do GitHub */
  .icons > :nth-child(3):hover {
    background-color: #333333; /* Cinza mais claro */
  }

  /* Ícone do Instagram */
  .icons > :first-child:hover {
    background-color: rgb(221, 157, 189);
  }

  .containerIcons svg {
    color: black;
    width: 35px;
    height: 35px;
    margin: 0 15px;
    cursor: pointer;
    transition: 300ms all ease-in-out;
    clip-path: circle(65%);
  }
  .containerIcons svg:hover {
    translate: -0px -10px;
  }

  .containerIcons p {
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.theme.colors.secundary};
    letter-spacing: 1px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .imageCard {
    width: 80%;
    height: 50%;
  }
  .imageCard img {
    width: 100%;
    height: 100%;
  }
  .textCard {
    width: 80%;
    height: 30%;
    overflow: auto;
  }
`;
