import React from "react";
import { ContainerSectionFor } from "./styles";
const SectionFor: React.FC = () => {
  return (
    <ContainerSectionFor>
      <div className="contact">
        <div className="card">
          <div className="card-inner">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="card-center">
            <h2>titulo</h2>
          </div>
        </div>
      </div>
    </ContainerSectionFor>
  );
};

export default SectionFor;
