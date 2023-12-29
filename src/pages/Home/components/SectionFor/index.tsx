import React from "react";
import { ContainerSectionFor } from "./styles";
import Contact from "components/Form";
import { useToastContext } from "components/Toast/useToastContext";
import useIntersectionObserver from "utils/useIntersectionObserver";

type sectionForProps = {
  sectionForRef: React.RefObject<HTMLDivElement>;
}

const SectionFor: React.FC<sectionForProps> = ({ sectionForRef }) => {

  const isFormVisible = useIntersectionObserver(sectionForRef);
  const { ToastComponent } = useToastContext();

  return (
    <ContainerSectionFor ref={sectionForRef}>
      <section className={`forms ${isFormVisible ? "visible" : ""}`}>
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
      </section>
    </ContainerSectionFor>
  );
};

export default SectionFor;
