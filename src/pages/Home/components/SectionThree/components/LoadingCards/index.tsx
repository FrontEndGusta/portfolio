import React from "react";
import { LoadingCardsContainer } from "./styles";

interface LoadingCardProps {
  key: string;
}

const LoadingCard: React.FC<LoadingCardProps> = ({ key }) => {

  
  return (
    <div key={key} className="card">
      <div className="card__skeleton card__title"></div>
      <div className="card__skeleton card__image"></div>
      <div className="unir">
        <div className="icons">
          {Array.from({ length: 3 }, (_, index) => (
            <span key={index} className="card__skeleton"></span>
          ))}
        </div>
        <div className="viewMore">
          <div className="card__skeleton card__description"></div>
        </div>
      </div>
    </div>
  );
};

const LoadingCards: React.FC = () => {
  // Defina a quantidade desejada de cartões
  const numberOfCards = 3;

  // Crie um array com chaves únicas para cada card
  const cardKeys = Array.from({ length: numberOfCards }, (_, index) =>
    String(index)
  );

  return (
    <LoadingCardsContainer>
      {cardKeys.map((key) => (
        <LoadingCard key={key} />
      ))}
    </LoadingCardsContainer>
  );
};

export default LoadingCards;
