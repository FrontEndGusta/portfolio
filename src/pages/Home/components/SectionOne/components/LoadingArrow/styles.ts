import { styled } from "styled-components";

export const ContainerLoadingArrow = styled.div`
 display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 50px 50px;
  gap: 20px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    text-align: center;
    background-color: white;
    clip-path: polygon(
      7% 0,
      100% 0,
      100% 0,
      100% 93%,
      94% 100%,
      0 100%,
      0 100%,
      0 7%
    );
  }

  .card__skeleton {
    background-image: linear-gradient(
      90deg,
      #ccc 0px,
      rgb(229 229 229 / 90%) 40px,
      #ccc 80px
    );
    background-size: 300%;
    background-position: 100% 0;
    border-radius: inherit;
    animation: shimmer 1.5s infinite;
  }
  .card__title {
    height: 10px;
    border-radius: 0;
    width: 30px;
    margin-top: 5px;
    text-align: center;
  }
  .card__image {
    height: 10px;
    width: 30px;
    margin: 5px 0 5px;
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }
;
`
