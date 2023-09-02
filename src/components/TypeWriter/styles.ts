import styled from "styled-components";

export const TypeWriterContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;

  .writer::after {
    content: "|";
    margin-left: 2px;
    opacity: 1;
    animation: pisca .7s infinite;

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
