import React, { useState } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  title: string | number;
  imageUrl?: string;
  icons: React.ReactNode[]; // Nova prop para a imagem
  onViewMoreClick: () => void;
}

export const Card: React.FC<CardProps> = ({ title, imageUrl, icons, onViewMoreClick }) => {


  return (
    <CardContainer>
      <div className="card">
        <h3>{title}</h3>
        <div className="image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="technologies">
          <div className="icons">
            {icons.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
          <div className="viewMore">
            <button onClick={() => {
              onViewMoreClick(); // Chama a função quando o botão é clicado
            }}>ver mais..</button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
