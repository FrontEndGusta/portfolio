import React, { useState } from "react";
import { CarouselItem } from "../Carrousel/components/useCarrouselItem";
import { CarrouselTwoContainer } from "./styles";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

interface CarouselProps {
  items: { icon: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };
  
  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  

  return (
    <CarrouselTwoContainer>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} width={"100%"} />
        ))}
      </div>
      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={prevImage}
        >
          <span className="previous">
            <MdOutlineArrowBackIos />
          </span>
        </button>
        <div className="indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className="indicator-buttons"
              onClick={() => setActiveIndex(index)}
            >
              <span
                className={`${
                  index === activeIndex
                    ? "indicators-symbol-active"
                    : "indicators-symbol"
                }`}
              >
                <MdOutlineRadioButtonChecked />
              </span>
            </button>
          ))}
        </div>
        <button
          className="button-arrow"
          onClick={nextImage}
        >
          <span className="next">
            <MdOutlineArrowForwardIos />
          </span>
        </button>
      </div>
    </CarrouselTwoContainer>
  );
};

export default Carousel;
