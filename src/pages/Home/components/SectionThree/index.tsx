import { SessionTreeContainer } from "./styles";
import LoadingCards from "./components/LoadingCards";
import { useSectionThree } from "./hooks/useSectionThree";
import { sectionThreeReturn } from "./hooks/useSectionThree.types";
import texts from "utils/texts";
import data2 from '../../../../utils/db.json'
export const SectionThree: React.FC<sectionThreeReturn> = ({
  sectionThreeRef,
}) => {
  const {
    isLoading,
    data,
    isExperienceModalOpen,
    experienceModalIndex,
    isProjectsModalOpen,
    projectsModalIndex,
    renderCards,
    renderModalVideos,
  } = useSectionThree(sectionThreeRef);

  return (
    <>
      <SessionTreeContainer ref={sectionThreeRef}>
        {data2 && (
          <section>
            <h2>{data2?.titleHighlights.title}</h2>
            <div className="containerCards">
              {/* {renderCards(data.cardsHighlights, "experience")} */}
              {renderCards(data2.cardsHighlights, "experience")}
            </div>

            <h2>{data2?.titleAllProjects.title}</h2>
            <div className="containerCards">
              {renderCards(data2.cardsAllProjects, "projects")}
            </div>
          </section>
        )}
      </SessionTreeContainer>

      {renderModalVideos(
        data2?.modalVideoHighlights || [],
        isExperienceModalOpen,
        experienceModalIndex
      )}
      {renderModalVideos(
        data2?.modalVideoAllProjects || [],
        isProjectsModalOpen,
        projectsModalIndex
      )}
    </>
  );
};

export default SectionThree;
