import React from "react";
import { ContainerSectionFor } from "./styles";
import IconsContact from "./components/IconsContact";
import Contact from "components/Form";
import { useToastContext } from "components/Toast/useToastContext";
import useIntersectionObserver from "utils/useIntersectionObserver";
interface sectionForProps {
  sectionForRef: React.RefObject<HTMLDivElement>;
}
const SectionFor: React.FC<sectionForProps> = ({ sectionForRef }) => {
  const isProjectsVisible = useIntersectionObserver(sectionForRef);
  const { ToastComponent } = useToastContext();
  return (
    <ContainerSectionFor ref={sectionForRef}>
      <section>
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
