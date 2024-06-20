import React from "react";
import { SessionTwoContainer } from "./styles";
import useIntersectionObserver from "../../../../utils/useIntersectionObserver";
import IconSlider from "../../../../components/IconSlider";
import ProgressBar from "../../../../components/ProgressTecnologies";
import LoadingAbout from "./components/LoadingAbout";
import { SectionTwoReturn } from "./hooks/useSectionTwo.types";
import useSectionTwo from "./hooks/useSectionTwo";
import data2 from '../../../../utils/db.json'

const SectionTwo: React.FC<SectionTwoReturn> = ({ sectionTwoRef }) => {

  const isAboutVisible = useIntersectionObserver(sectionTwoRef);
  const { technologies, data, isLoading } = useSectionTwo();

  return (
    <>
      {/* {isLoading && <LoadingAbout />} */}
      <SessionTwoContainer ref={sectionTwoRef}>
          <section className={`about ${isAboutVisible ? "visible" : ""}`}>
            <div className="containerAbout">
              <h2>{data2?.about?.aboutMe}</h2>
              <div className="tecnologies">
                <div className="description">
                  <p>{data2?.about?.description}</p>
                </div>
              </div>
              <div className="carrousel">
                <h2>Habilidades</h2>
                <IconSlider />
              </div>
              {isAboutVisible && <ProgressBar tech={technologies} />}
            </div>
          </section>
      </SessionTwoContainer>
    </>
  );
};

export default SectionTwo;
