import React, { useState } from "react";
import { SessionTwoContainer } from "./styles";
import Card from "../Card";
import texts from "../../utils/texts";
import IconSlider from "../IconSlider";
interface SectionTwoProps {
  sectionTwoRef: React.RefObject<HTMLDivElement>; // Defina a propriedade sectionTwoRef corretamente
}

const SectionTwo: React.FC<SectionTwoProps> = ({ sectionTwoRef }) => {

  return (
    <>
      <SessionTwoContainer ref={sectionTwoRef}>
        <section className="about">
          <div className="containerAbout">
          <div className="tecnologies">
            <h2>{texts.sectionTwo.about.aboutMe}</h2>
            <p>{texts.sectionTwo.about.description}</p>
          </div>
          <div className="carrousel">
            <h2>Habilidades</h2>
            {/* <Carousel3D images={[]}/> */}
            <IconSlider/>
          </div>
          </div>
          <div></div>
        </section>
      </SessionTwoContainer>
    </>
  );
};

export default SectionTwo;
