import styled from "styled-components";

export const TypeWriterContainer = styled.div`
  display: flex;
  align-items: center;

  .typewriter {
    width: 100%;
  }
  .typewriter h1 {
    width: 100%;
    font-size: 3em;
  }

  @media (width <= 620px) {
    .typewriter h1 {
      font-size: 2em;
    }
  }

  .writer::after {
    content: "|";
    margin-left: 2px;
    opacity: 1;
    animation: pisca 0.7s infinite;

    @keyframes pisca {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
  }
`;
