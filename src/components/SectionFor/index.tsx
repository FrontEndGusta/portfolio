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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt error rerum veritatis iusto adipisci mollitia sint minima, quisquam ex ipsa incidunt sequi, recusandae fugit dignissimos architecto dolorem tenetur. Voluptatum.</p>
          </div>
        </div>
      </div>
    </ContainerSectionFor>
  );
};

export default SectionFor;
