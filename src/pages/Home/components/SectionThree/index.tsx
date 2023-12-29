import { SessionTreeContainer } from "./styles";
import LoadingCards from "./components/LoadingCards";
import { useSectionThree } from "./hooks/useSectionThree";
import { sectionThreeReturn } from "./hooks/useSectionThree.types";

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
      {isLoading && <LoadingCards />}
      <SessionTreeContainer ref={sectionThreeRef}>
        {data && (
          <section>
            <h2>{data.titleHighlights.title}</h2>
            <div className="containerCards">
              {renderCards(data.cardsHighlights, "experience")}
            </div>

            <h2>{data.titleAllProjects.title}</h2>
            <div className="containerCards">
              {renderCards(data.cardsAllProjects, "projects")}
            </div>
          </section>
        )}
      </SessionTreeContainer>

      {renderModalVideos(
        data?.modalVideoHighlights || [],
        isExperienceModalOpen,
        experienceModalIndex
      )}
      {renderModalVideos(
        data?.modalVideoAllProjects || [],
        isProjectsModalOpen,
        projectsModalIndex
      )}
    </>
  );
};

export default SectionThree;
