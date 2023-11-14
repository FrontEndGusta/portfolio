import styled from "styled-components";

export const ContainerProgressTecnologies = styled.div`
  width: 50%;
  box-shadow: ${props => props.theme.colors.shadow};
  padding: 10px 20px;
  border-radius: 10px;

  .title-text {
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    border-radius: 50px;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  .skill-box {
    width: 100%;
    margin: 25px 0;
  }

  .skill-box .title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
    text-align: left;
  }

  .skill-box .skill-bar {
    height: 8px;
    width: 100%;
    border-radius: 6px;
    margin-top: 6px;
    background: rgba(0, 0, 0, 0.1);
  }

  .skill-box .skill-per {
    position: relative;
    display: block;
    height: 100%;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.primary};
    animation: progress 2s ease-in-out forwards;
    opacity: 0;
  }

  @keyframes progress {
    0% {
      width: 0;
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  .skill-per .tooltip {
    position: absolute;
    right: -14px;
    top: -28px;
    font-size: 11px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secundary};
    padding: 2px 6px;
    border-radius: 3px;
    background: ${(props) => props.theme.colors.primary};
    z-index: 1;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background-color: ${(props) => props.theme.colors.primary};
    transform: translateX(-50%) rotate(45deg);
  }
  @media (width <= 768px) {
    width: 70%;
  }
`;
