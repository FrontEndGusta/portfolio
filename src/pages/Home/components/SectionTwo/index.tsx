import React, { useEffect, useState } from "react";
import { SessionTwoContainer } from "./styles";
import useIntersectionObserver from "../../../../utils/useIntersectionObserver";
import IconSlider from "../../../../components/IconSlider";
import ProgressBar from "../../../../components/ProgressTecnologies";
import texts from "backup/texts";
import useApi from "services/useApi";
import LoadingAbout from "./components/LoadingAbout";
interface SectionTwoProps {
  sectionTwoRef: React.RefObject<HTMLDivElement>; // Defina a propriedade sectionTwoRef corretamente
}

const SectionTwo: React.FC<SectionTwoProps> = ({ sectionTwoRef }) => {
  const isAboutVisible = useIntersectionObserver(sectionTwoRef);

  const technologies = [
    { name: "React", width: 80 },
    { name: "Javascript", width: 70 },
    { name: "Typescript", width: 80 },
    { name: "Git", width: 70 },
    { name: "Styled-Components", width: 85 },
    // Adicione quantas tecnologias desejar
  ];

  type AboutData = {
    about: {
      aboutMe: string;
      description: string;
    };
  };

  const { data, isLoading } = useApi<AboutData>("/sectionTwo");

  return (
    <>
      {isLoading && <LoadingAbout />}
      <SessionTwoContainer ref={sectionTwoRef}>
        {data && (
          <section className={`about ${isAboutVisible ? "visible" : ""}`}>
            <div className="containerAbout">
              <h2>{data?.about?.aboutMe}</h2>
              <div className="tecnologies">
                <div className="description">
                  <p>{data?.about?.description}</p>
                </div>
              </div>
              <div className="carrousel">
                <h2>Habilidades</h2>
                <IconSlider />
              </div>
              {isAboutVisible && <ProgressBar tech={technologies} />}
            </div>
          </section>
        )}
      </SessionTwoContainer>
    </>
  );
};

export default SectionTwo;
