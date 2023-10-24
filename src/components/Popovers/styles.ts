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
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
    position: relative;
  }
  .icons {
    border: 2px solid black;
    padding: 10px 15px;
    border-radius: 50px;
  }

  .containerIcons svg {
    color: black;
    width: 35px;
    height: 35px;
    margin: 0 15px;
    cursor: pointer;
  }
  .containerIcons svg:hover {
    animation: spinAndScale 0.9s ease;
    transform: scale(1.4);
  }

  @keyframes spinAndScale {
    0% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotateY(360deg) scale(1.4);
    }
  }

  .containerIcons p {
    width: 85%;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .imageCard img {
    width: 40px;
    height: 40px;
  }
`;
