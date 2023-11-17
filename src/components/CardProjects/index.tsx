import React, { useState } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  title: string | number;
  imageUrl?: string;
  customComponent?: React.ReactNode;
  icons?: React.ReactNode[]; // Change to an array of React nodes
  onViewMoreClick: () => void;
  showViewMoreButton?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  customComponent,
  icons,
  showViewMoreButton = true,
  onViewMoreClick,
}) => {
  return (
    <CardContainer>
      <div className="card">
        <h3>{title}</h3>
        <div className="image">
          {imageUrl && <img src={imageUrl} alt={`Image`} />}
          {customComponent && !imageUrl && (
            <div className="custom-image">{customComponent}</div>
          )}
        </div>
        <div className="technologies">
          <div className="icons">
            {icons &&
              icons.map((icon, index) => <span key={index}>{icon}</span>)}
          </div>
          <div className="viewMore">
            {showViewMoreButton && (
              <button onClick={onViewMoreClick}>ver mais..</button>
            )}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
