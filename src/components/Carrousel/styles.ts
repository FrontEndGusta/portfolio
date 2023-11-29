import styled from "styled-components";

export const ContainerCarousel = styled.div`
  height: 100%;
  .carrousel-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .carrousel-images {
    width: 90%;
    height: 90%;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  .image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .image {
    width: 90%;
    border-radius: 8px;
    object-fit: contain;
  }

  .arrow {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    font-size: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    transition: transform .1s ease-in-out;
  }

  .arrow:active{
    transform: translateY(-50%) scale(0.7);
  }

  .arrow svg{
    color: #757575;
  }

  .arrow:first-child {
    left: 24px;
  }

  .arrow:last-child {
    right: 24px;
  }

  .dots {
    display: flex;
    justify-content: center;
    margin: 10px 0 10px;
  }

  .dot {
    height: 10px;
    width: 10px;
    background-color: #bbb;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  .dot.active {
    background-color: #333;
  }
  @media (width <= 768px) {
    .arrow:first-child {
    left: 5px;
  }

  .arrow:last-child {
    right: 5px;
  }
  }
`;
