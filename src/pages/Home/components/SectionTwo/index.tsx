import React, { useEffect, useState } from "react";
import { SessionTwoContainer } from "./styles";
import useIntersectionObserver from "../../../../utils/useIntersectionObserver";
import IconSlider from "../../../../components/IconSlider";
import ProgressBar from "../../../../components/ProgressTecnologies";
import texts from "backup/texts";
import useApi from "services/useApi";
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

  type AboutData = {
    about: {
      aboutMe: string;
      description: string;
    };
  };

  const { data, isLoading } = useApi<AboutData>("/sectionTwo");
  console.log(data);

  return (
    <>
      {isLoading && <p> carregando</p>}
      <SessionTwoContainer ref={sectionTwoRef}>
        <section className={`about ${isAboutVisible ? "visible" : ""}`}>
          <div className="containerAbout">
            <div className="tecnologies">
              <h2>{data?.about?.aboutMe}</h2>
              <p>{data?.about?.description}</p>
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
