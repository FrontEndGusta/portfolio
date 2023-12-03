import { styled } from "styled-components";

export const CarrouselTwoContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

.inner{
  white-space: nowrap;
  transition: transform 0.3s;
  height: 100%;
}

.carousel-item{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fff;
}

.carousel-img{
  height: 85%;
  width: 100%;
}

.carousel-buttons{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.button-arrow{
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0;
}

.indicators{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}

.indicator-buttons{
  border:none;
  cursor: pointer;
  padding: 0;
}

.indicators > button{
  background: none ;
}

.indicators-symbol svg{
  height: 20px;
  width: 20px;
  color: #090C08;
}

.indicators-symbol-active svg{
  color: #8f44fd;
  height: 25px;
  width: 25px;
}
`;
