import React, { useState } from "react";
import "./styles";
import image1 from "../../assets/avatar.jpeg";
import image2 from "../../assets/Carousel/2.svg";
import {
  BiChevronRight,
  BiChevronLeft,
  BiLogoJavascript,
  BiLogoGithub,
  BiLogoTypescript,
} from "react-icons/bi";
import { ContainerCarousel } from "./styles";

const images = [<BiLogoJavascript />, <BiLogoGithub />, <BiLogoTypescript />, <BiLogoJavascript />, <BiLogoGithub />, <BiLogoTypescript />]; // Add more images as needed

interface CarouselProps {
  images: React.ReactNode[]; // Change the type to ReactNode
}

const Carousel3D: React.FC<CarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <ContainerCarousel>
      <div className="carousel-container">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {typeof image === "string" ? (
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="carousel-image"
                />
              ) : (
                image // Render React elements directly
              )}
            </div>
            
          ))}
           {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {typeof image === "string" ? (
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="carousel-image"
                />
              ) : (
                image // Render React elements directly
              )}
            </div>
            
          ))}
        </div>
        <div className="buttons">
          <button onClick={prevImage}>
            <BiChevronLeft />
          </button>
          <button onClick={nextImage}>
            <BiChevronRight />
          </button>
        </div>
      </div>
    </ContainerCarousel>
  );
};

export default Carousel3D;
