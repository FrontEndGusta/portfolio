import React from "react";
import { LoadingCardsContainer } from "./styles";

interface LoadingCardProps {
  cardKey: string;
}

const LoadingCard: React.FC<LoadingCardProps> = ({ cardKey }) => {
  return (
    <div key={cardKey} className="card">
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
  // Define a quantidade desejada de cartões
  const numberOfCards = 3;

  // Crie um array com chaves únicas para cada card
  const cardKeys = Array.from({ length: numberOfCards }, (_, index) =>
    String(index)
  );

  return (
    <LoadingCardsContainer>
      {cardKeys.map((cardKey, index) => (
        <LoadingCard cardKey={cardKey} key={index}/>
      ))}
    </LoadingCardsContainer>
  );
};

export default LoadingCards;
