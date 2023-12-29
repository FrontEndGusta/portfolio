import React, { RefObject } from "react";
import { BiArrowToBottom, BiChevronsDown } from "react-icons/bi";
import { SessionOneContainer } from "./styles";
import TypeWriter from "components/TypeWriter";
import image from "assets/avatar.jpeg";
import useSectionOne from "./hooks/useSectionOne";
import { SectionTwoPropsReturn } from "./hooks/useSectionOne.types";
import LoadingArrow from "./components/LoadingArrow";

export const SectionOne: React.FC<SectionTwoPropsReturn> = ({
  sectionOneRef,
  sectionTwoRef,
}) => {
  const {
    isBannerVisible,
    data,
    isLoading,
    scrollToSection,
    handleDownloadClick,
    handleContactClick,
  } = useSectionOne();

  return (
    <>
      <SessionOneContainer ref={sectionOneRef}>
        <section className={`banner ${isBannerVisible ? "visible" : ""}`}>
          <div className="textBanner">
            <TypeWriter />
            <h3>Desenvolvedor Front-End</h3>
            <div className="containerBtn">
              <button className="cv" onClick={handleDownloadClick}>
                Baixar CV <BiArrowToBottom />
              </button>
              <button className="contact" onClick={handleContactClick}>
                Contato
              </button>
            </div>
          </div>
          <img src={image} alt="Avatar" />

          <div className="arr" onClick={() => scrollToSection(sectionTwoRef)}>
            {isLoading && <LoadingArrow />}
            {data && <BiChevronsDown />}
          </div>
        </section>
      </SessionOneContainer>
    </>
  );
};

export default SectionOne;
