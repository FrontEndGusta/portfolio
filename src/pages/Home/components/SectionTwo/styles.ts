import styled from "styled-components";

export const SessionTwoContainer = styled.div`
  @keyframes bounce-in-left {
    0% {
      transform: translateX(-600px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateX(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateX(-68px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateX(-28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateX(-8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateX(0);
      animation-timing-function: ease-out;
    }
  }

  .about {
    height: 170vh;
    text-align: center;
    opacity: 0;
  }
  .visible {
    opacity: 1;
    animation: bounce-in-left 1.3s both;
  }

  .about h2 {
    color: ${(props) => props.theme.colors.primary};
  }
  .containerAbout {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 15px;
  }

  .tecnologies {
    width: 65%;
  }

  .tecnologies h2 {
    font-size: 2.5em;
  }

  .tecnologies p {
    line-height: 32px;
    font-size: 1.2em;
    margin: 35px 0 35px;
  }

  .carrousel {
    width: 100%;
    padding: 0 50px 0 50px;
  }

  @media (width <= 650px) {
    .tecnologies {
      width: 95%;
      overflow: auto;
    }
  }
`;
