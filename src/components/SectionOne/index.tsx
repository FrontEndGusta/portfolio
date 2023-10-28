import React, { useContext, useRef } from "react";
import { BiArrowToBottom, BiChevronsDown } from "react-icons/bi";
import { SessionOneContainer } from "./styles";
import TypeWriter from "../TypeWriter";
import image from "../../assets/avatar.jpeg";
import SectionTwo from "../SectionTwo";
import SectionTree from "../SectionTree";
export const SectionOne: React.FC = () => {
  const sectionTwoRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToSectionTwo = () => {
    // Role suavemente para a SectionTwo
    if (sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <SessionOneContainer>
        <section className="banner">
          <div className="textBanner">
            <TypeWriter />
            <h3>Desenvolvedor Front-End</h3>
            <div className="containerBtn">
              <button className="cv">
                Baixar CV <BiArrowToBottom />
              </button>
              <button className="contact">Contato</button>
            </div>
          </div>
          <img src={image} alt="Avatar" />
          <div className="arr" onClick={handleScrollToSectionTwo}>
            <BiChevronsDown />
          </div>
        </section>
      </SessionOneContainer>
      <SectionTwo sectionTwoRef={sectionTwoRef} />
      <SectionTree />
    </>
  );
};

export default SectionOne;
