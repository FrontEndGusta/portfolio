import styled from "styled-components";

export const CardContainer = styled.div`
  .card {
    min-width: 270px;
    max-width: 340px;
    height: 254px;
    background: ${(props) => props.theme.colors.primary};
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    border-radius: 20px;
    transition: all 0.1s ease-out;
    cursor: pointer;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    box-shadow: ${(props) => props.theme.colors.shadow};
  }
  .card:hover {
    transform: scale(1.1);
  }
  button {
    color: ${(props) => props.theme.colors.primary};
  }
  button:hover {
    transform: scale(1);
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
  }
  button:active {
    transform: scale(0.9);
    transition: all 0.2s;
  }

  .card h3 {
    z-index: 1;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5;
  }
  .image {
    z-index: 1;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    margin: 2% 0 5%;
  }
  .image img {
    border-radius: 5px;
    border: 2px solid black;
    width: 80%;
    clip-path: polygon(5% 0, 100% 0, 100% 0, 100% 93%, 96% 100%, 0 100%, 0 100%, 0 6%);
  }

  .technologies {
    z-index: 1;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
  .icons {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .icons svg {
    width: 20px;
    height: 20px;
    border: 1px solid ${props => props.theme.colors.primary};
  }

  .viewMore {
    width: 40%;
    display: flex;
    justify-content: center;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100px;
    background-image: linear-gradient(
      180deg,
      #8f44fd,
      #8f44fd
    );
    height: 170%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: "";
    position: absolute;
    background: ${(props) => props.theme.colors.secundary};
    inset: 4px;
    border-radius: 15px;
  }
`;
