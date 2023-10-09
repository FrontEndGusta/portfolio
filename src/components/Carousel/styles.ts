import styled from "styled-components";

export const ContainerCarousel = styled.div`
ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  width: 100%;
  height: 30vh;
  perspective: 100px;
  overflow: hidden;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel::before,
.carousel::after {
  content: "";
  position: absolute;
  z-index: 2;
  left: 50%;
  translate: -50% 0;
  width: 500%;
  height: 500%;
  border-radius: 50%;
  background: #ffffff;
}

.carousel::before {
  top: -480%;
}

.carousel::after {
  bottom: -480%;
}

.carousel__slide {
  position: relative;
  flex: 0 0 33.33%;
  width: 33.33%;
  counter-increment: item;
}

.carousel__slide:before {
  content: counter(item);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -40%, 70px);
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  border: 10px solid #ffffff;
}
`;