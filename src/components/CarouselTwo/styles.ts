import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: perspective(3500px) rotateY(0deg);
  }
  100% {
    transform: perspective(3500px) rotateY(360deg);
  }
`;

export const ContainerCarouselTwo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-size: cover;

  .containerSkills {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  
  }
  .skills {
    width: 50%;
  }
  .skills h2{
    letter-spacing: 1.5px;
    font-weight: 700;
    margin:15px 0;
  }
  .skills p{
    letter-spacing: 1.5px;
    font-weight: 700;
    opacity: .9;
    margin-bottom: 15px;
    line-height: 25px;
    color: ${props => props.theme.colors.primary};
  }
  .image6{
    filter: ${props => props.theme.colors.filter};

  }
  .box {
    position: relative;
    width: 200px;
    height: 100px;
    transform-style: preserve-3d;
    animation: ${animate} 10s linear infinite;
  }

  .box span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 50deg)) translateZ(100px);
    -webkit-box-reflect: below 0px
      linear-gradient(transparent, transparent, #0004);
  }

  .box span img {
    position: absolute;
    top: 20%;
    left: 0;
    height: 60%;
    object-fit: cover;
  }
`;
