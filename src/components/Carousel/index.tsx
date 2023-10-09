import React from "react";
import { ContainerCarousel } from "./styles";
import { ThemeContext } from "styled-components";
import { Container } from "../Header/styles";
import image1 from "../../assets/Carousel/1.jpg";
import image2 from "../../assets/Carousel/2.jpg";
import image3 from "../../assets/Carousel/8.svg";
import BiLogoReact from 'react-icons/bi'
const Carousel: React.FC = () => {
  const images = [image1, image2, image3];
  return (
    <>
      <ContainerCarousel>
        <section className="carousel">
          <ol className="carousel__viewport">
            {images.map((image, index) => (
              <li key={index} className="carousel__slide">
                <div
                  className="carousel__snapper"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </li>
            ))}
          </ol>
        </section>
      </ContainerCarousel>
    </>
  );
};

export default Carousel;
