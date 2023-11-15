import styled from "styled-components";

export const SessionOneContainer = styled.div`
@keyframes slide-in-top {
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

  body {
    margin: 0;
  }

  section {
    padding: 30px 15%;
  }

  @media (width <= 720px) {
    section {
      padding: 30px 10%;
    }
  }

  .banner {
    position: relative;
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 100px;
    height: 100vh;
    margin-bottom: 40px;
  }

  .visible {
    animation:slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @media (width <= 620px) {
    .banner {
      text-align: center;
      flex-direction: column-reverse;
      justify-content: center;
      padding-top: 0;
      height: 95vh;
    }
    .containerBtn {
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
    }
  }

  .banner::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 100%;
    height: 100%;
  }

  .banner h2 {
    white-space: nowrap;
    margin: 0 0 4px;
    letter-spacing: 1.5px;
    color: ${(props) => props.theme.colors.primary};
  }

  .banner h3 {
    font-weight: 400;
    letter-spacing: 1.5px;
    margin: 10px 0 10px 0;
    color: ${(props) => props.theme.colors.primary};
  }

  .containerBtn {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }
    34% {
      border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    }
  }

  .banner img {
    width: 220px;
    height: 220px;
    object-fit: cover;
    animation: morph 3.5s linear infinite;
  }

  .cv {
    margin-right: 20px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
    &:hover {
      background: ${(props) => props.theme.colors.secundary};
      color: ${(props) => props.theme.colors.primary};
      svg {
        color: ${(props) =>
          props.theme.colors
            .primary}; /* Altera a cor de preenchimento do ícone para preto */
      }
    }
    &:active {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secundary};
      svg {
        color: ${(props) => props.theme.colors.secundary};
      }
    }
  }

  .cv svg {
    color: ${(props) => props.theme.colors.secundary};
  }

  .contact {
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secundary};
    }
    &:active {
      background-color: ${(props) => props.theme.colors.secundary};
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .arr {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  .arr svg {
    height: 40px;
    width: 50px;
    cursor: pointer;
    animation: arrowDown 1.5s ease infinite;
  }
  .arr svg:active {
    color: blue;
  }

  @keyframes arrowDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
