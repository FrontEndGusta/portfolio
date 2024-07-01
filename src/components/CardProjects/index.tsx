import React, { useState } from "react";
import { CardContainer } from "./styles";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaLongArrowAltLeft } from "react-icons/fa";

interface CardProps {
  title: string | number;
  imageUrl?: string;
  customComponent?: React.ReactNode;
  icons?: React.ReactNode[];
  onViewMoreClick: () => void;
  showViewMoreButton?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  customComponent,
  icons = [],
  showViewMoreButton = true,
  onViewMoreClick,
}) => {
  const [showAllIcons, setShowAllIcons] = useState(false);

  const displayedIcons = showAllIcons ? icons : icons.slice(0, 3);

  const handleViewMoreClick = () => {
    setShowAllIcons(!showAllIcons);
  };

  return (
    <CardContainer>
      <div className="card">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="image">
          {imageUrl && <img src={imageUrl} alt={`Image`} />}
          {customComponent && !imageUrl && (
            <div className="custom-image">{customComponent}</div>
          )}
        </div>
        <div className="technologies">
          <div className="icons">
            {displayedIcons.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
            {icons.length > 3 && (
              <span className="view-more-dots" onClick={handleViewMoreClick}>
                {showAllIcons ? <FaLongArrowAltLeft /> : <HiDotsHorizontal />}
              </span>
            )}
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
