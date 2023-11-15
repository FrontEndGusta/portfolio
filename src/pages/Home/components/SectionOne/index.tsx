import React, { RefObject } from "react";
import { BiArrowToBottom, BiChevronsDown } from "react-icons/bi";
import { SessionOneContainer } from "./styles";
import useIntersectionObserver from "utils/useIntersectionObserver";
import TypeWriter from "components/TypeWriter";
import image from 'assets/avatar.jpeg'
interface SectionTwoProps {
  sectionOneRef: React.RefObject<HTMLDivElement>;
  sectionTwoRef: React.RefObject<HTMLDivElement>;
}

export const SectionOne: React.FC<SectionTwoProps> = ({
  sectionOneRef,
  sectionTwoRef,
}) => {
  const isBannerVisible = useIntersectionObserver(sectionOneRef);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SessionOneContainer ref={sectionOneRef}>
        <section className={`banner ${isBannerVisible ? "visible" : ""}`}>
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
          <div className="arr" onClick={() => scrollToSection(sectionTwoRef)}>
            <BiChevronsDown />
          </div>
        </section>
      </SessionOneContainer>
    </>
  );
};

export default SectionOne;
