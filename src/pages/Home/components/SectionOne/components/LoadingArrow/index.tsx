import React from "react";
import { ContainerLoadingArrow } from "./styles";



const LoadingArrow: React.FC = () => {
  return (
    <ContainerLoadingArrow>
    <div  className="card">
      <div className="card__skeleton card__title"></div>
      <div className="card__skeleton card__image"></div>
    </div>
    </ContainerLoadingArrow>
  );
};

export default LoadingArrow;
