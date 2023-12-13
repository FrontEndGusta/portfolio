import React from "react";
import { LoadingAboutContainer } from "./styles";

interface LoadingCardProps {
  cardKey: string;
}

const LoadingAboutMe: React.FC<LoadingCardProps> = ({ cardKey }) => {
  return (
    <div key={cardKey} className="card">
      <div className="card__skeleton card__title"></div>
      <div className="unir">
        <div className="texts">
          {Array.from({ length: 7 }, (_, index) => (
            <span key={index} className="card__skeleton"></span>
          ))}
          <div className="card__skeleton card__slider"></div>
            <div className="card__skeleton card__progress"></div>
        </div>
        
        
      </div>
    </div>
  );
};

const LoadingAbout: React.FC = () => {
  // Define a quantidade desejada de cartões
  const numberOfCards = 1;

  // Crie um array com chaves únicas para cada card
  const cardKeys = Array.from({ length: numberOfCards }, (_, index) =>
    String(index)
  );

  return (
    <LoadingAboutContainer>
      {cardKeys.map((cardKey, index) => (
        <LoadingAboutMe cardKey={cardKey} key={index}/>
      ))}
    </LoadingAboutContainer>
  );
};

export default LoadingAbout;
