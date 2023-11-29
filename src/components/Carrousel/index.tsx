import React, { useState } from "react";
import "./styles";
import image1 from "../../assets/avatar.jpeg";
import image2 from "../../assets/Carousel/2.svg";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos  } from "react-icons/md";

import { ContainerCarousel } from "./styles";

interface CarouselProps {
  images: string[]; // Change the type to ReactNode
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <ContainerCarousel>
      <div className="carrousel-container">
        <div className="carrousel-images">
          <button className="arrow" onClick={prevImage}>
            <MdOutlineArrowBackIos />
          </button>
          <div className="image-container">
            <img
              className="image"
              src={images[currentImage]}
              alt={`Image ${currentImage + 1}`}
            />
          </div>
          <button className="arrow" onClick={nextImage}>
           <MdOutlineArrowForwardIos />
          </button>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImage === index ? "active" : ""}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </ContainerCarousel>
  );
};

export default Carousel;
