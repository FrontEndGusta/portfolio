import styled from "styled-components";

export const ContainerCarousel = styled.div`
height: 100%;
.carousel-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.carousel {
  width: 80%;
  height: 90%;
  max-width: 600px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.image-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  font-size: 24px;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  color: #333;
  transition: background-color 0.3s;
}

.arrow:hover {
  background-color: #ddd;
}

.arrow:first-child {
  left: 10px;
}

.arrow:last-child {
  right: 10px;
}

.dots {
  display: flex;
  justify-content: center;
  margin: 10px 0 10px;;
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

`