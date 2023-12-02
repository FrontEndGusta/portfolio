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

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
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
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">
            <MdOutlineArrowBackIos />
          </span>
        </button>
        <div className="indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className="indicator-buttons"
              onClick={() => updateIndex(index)}
            >
              <span
                className={`material-symbols-outlined ${
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
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">
            <MdOutlineArrowForwardIos />
          </span>
        </button>
      </div>
    </CarrouselTwoContainer>
  );
};

export default Carousel;
