import { styled } from "styled-components";

export const LoadingCardsContainer = styled.div`

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 50px 50px;
  gap: 20px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 270px;
    max-width: 340px;
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
    height: 20px;
    border-radius: 0;
    width: 70%;
    margin-top: 10px;
    text-align: center;
  }
  .card__image {
    height: 127px;
    width: 100%;
  }

  .unir {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .viewMore {
    width: 40%;
    display: flex;
    justify-content: center;
  }

  .icons {
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .icons span {
    height: 20px;
    width: 20px;
    margin-bottom: 0;
  }
  .card__description {
    width: 100%;
    height: 40px;
    border-radius: 34px;
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }
`;
