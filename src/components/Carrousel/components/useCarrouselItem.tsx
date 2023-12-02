import React from "react";

interface CarouselItemProps {
  item: {
    icon: string;
  };
  width: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img
        className="carousel-img"
        style={{ objectFit: "contain" }}
        src={item.icon}
        alt="carousel"
      />
    </div>
  );
};
