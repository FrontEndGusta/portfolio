import texts from "../../utils/texts";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import Card from "../Card";
import image1 from "../../assets/avatar.jpeg";
import { SessionTreeContainer } from "./styles";
import { useState } from "react";
import ModalVideo from "../Modal-2";
import useIntersectionObserver from "../../utils/useIntersectionObserver";
interface sectionThreeProps {
  sectionThreeRef: React.RefObject<HTMLDivElement>;
}

// Interface para os dados de um card
interface CardData {
  title: string;
  description: string;
}

// Interface para os dados de um modal de vídeo
interface ModalVideoData {
  title: string;
  description: string;
  url: string;
}

export const SectionThree: React.FC<sectionThreeProps> = ({
  sectionThreeRef,
}) => {
  const icons = [<BiLogoJavascript />, <BiLogoHtml5 />, <BiLogoCss3 />];

  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [experienceModalIndex, setExperienceModalIndex] = useState<
    number | null
  >(null);

  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [projectsModalIndex, setProjectsModalIndex] = useState<number | null>(
    null
  );

  const isProjectsVisible = useIntersectionObserver(sectionThreeRef);

  const openModal = (index: number, section: string) => {
    if (section === "experience") {
      setIsExperienceModalOpen(true);
      setExperienceModalIndex(index);
    } else if (section === "projects") {
      setIsProjectsModalOpen(true);
      setProjectsModalIndex(index);
    }
  };

  const closeModal = () => {
    setIsExperienceModalOpen(false);
    setIsProjectsModalOpen(false);
  };

  // Função para renderizar Cards
  const renderCards = (data: CardData[], section: string) => {
    return data.map((cardData, index) => (
      <div className="hidden" key={index}>
        <Card
          title={cardData.title}
          imageUrl={image1}
          info={cardData.description}
          icons={icons}
          onViewMoreClick={() => openModal(index, section)}
        />
      </div>
    ));
  };

  // Função para renderizar modais de vídeo
  const renderModalVideos = (
    modalDataArray: ModalVideoData[],
    isOpen: boolean,
    index: number | null
  ) => {
    if (isOpen && index !== null) {
      return (
        <ModalVideo
          title={modalDataArray[index].title}
          description={modalDataArray[index].description}
          videoUrl={modalDataArray[index].url}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      );
    }
    return null;
  };

  return (
    <>
      <SessionTreeContainer ref={sectionThreeRef}>
        <div className="hidden">
          <h2>Experiências</h2>
          <div className="containerCards">
            {renderCards(texts.sectionTree.cardExperience, "experience")}
          </div>

          <h2>{texts.sectionTree.projects.title}</h2>
          <div className="containerCards">
            {renderCards(texts.sectionTree.cardsProjects, "projects")}
          </div>
        </div>
      </SessionTreeContainer>

      {renderModalVideos(
        texts.sectionTree.modalVideoExperience,
        isExperienceModalOpen,
        experienceModalIndex
      )}
      {renderModalVideos(
        texts.sectionTree.modalVideoAllProjects,
        isProjectsModalOpen,
        projectsModalIndex
      )}
    </>
  );
};

export default SectionThree;
