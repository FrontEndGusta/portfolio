import React from "react";
import { ContainerSectionFor } from "./styles";
import IconsContact from "./components/IconsContact";
import Contact from "components/Form";
import { useToastContext } from "components/Toast/useToastContext";

const SectionFor: React.FC = () => {
  const { ToastComponent } = useToastContext();
  return (
    <ContainerSectionFor>
      <div className="contact">
        <div className="card">
          <div className="card-inner">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="card-center">
            <Contact />
          </div>
        </div>
      {ToastComponent}
      </div>
     
    </ContainerSectionFor>
  );
};

export default SectionFor;
