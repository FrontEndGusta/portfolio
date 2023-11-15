import React, { useEffect, useState } from "react";
import { SessionTwoContainer } from "./styles";
import useIntersectionObserver from "../../../../utils/useIntersectionObserver";
import texts from "../../../../utils/texts";
import IconSlider from "../../../../components/IconSlider";
import ProgressBar from "../../../../components/ProgressTecnologies";
interface SectionTwoProps {
  sectionTwoRef: React.RefObject<HTMLDivElement>; // Defina a propriedade sectionTwoRef corretamente
}

const SectionTwo: React.FC<SectionTwoProps> = ({ sectionTwoRef }) => {
  const isAboutVisible = useIntersectionObserver(sectionTwoRef);

  const technologies = [
    { name: "React", width: 80 },
    { name: "Javascript", width: 70 },
    { name: "Typescript", width: 80 },
    { name: "Github", width: 70 },
    { name: "Styled-Components", width: 85 },
    // Adicione quantas tecnologias desejar
  ];

  return (
    <>
      <SessionTwoContainer ref={sectionTwoRef}>
        <section className={`about ${isAboutVisible ? "visible" : ""}`}>
          <div className="containerAbout">
            <div className="tecnologies">
              <h2>{texts.sectionTwo.about.aboutMe}</h2>
              <p>{texts.sectionTwo.about.description}</p>
            </div>
            <div className="carrousel">
              <h2>Habilidades</h2>
              <IconSlider />
            </div>
            {isAboutVisible && <ProgressBar tech={technologies} />}
          </div>
          <div></div>
        </section>
      </SessionTwoContainer>
    </>
  );
};

export default SectionTwo;
