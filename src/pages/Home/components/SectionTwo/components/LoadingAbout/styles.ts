import { styled } from "styled-components";

export const LoadingAboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  height: 100%;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 1rem;
    text-align: center;
    border-radius: 0.8rem;
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
    margin-bottom: 15px; /* Add margin between elements */
  }
  .card__title {
    height: 30px;
    border-radius: 0;
    width: 40%;
    margin-top: 10px;
    text-align: center;
  }

  .unir {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .texts {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }

  .texts span {
    height: 20px;
    width: 80%;
    
  }

  .card__slider{
    height: 100px;
    border-radius: 5px;
    width: 100%;
    margin-top: 50px;
    text-align: center;
  }

  .card__progress{
    height: 350px;
    border-radius: 5px;
    width:60%;
    margin-top: 50px;
    text-align: center;
  }

  @media(width <= 650px) {
    .card__progress{
    height: 200px;
    width:80%;
  }
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }

`