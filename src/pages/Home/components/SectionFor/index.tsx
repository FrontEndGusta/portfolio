import React from "react";
import { ContainerSectionFor } from "./styles";
import IconsContact from "./components";
import Contact from "components/Form";

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
            <h2>Contato</h2>
            <Contact />
            <div className="div"><IconsContact /></div>
          </div>
        </div>
      </div>
      
    </ContainerSectionFor>
  );
};

export default SectionFor;
