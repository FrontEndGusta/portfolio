import texts from "../../utils/texts";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import Card from "../Card";
import image1 from "../../assets/avatar.jpeg";
import { SessionTreeContainer } from "./styles";
import { useRef, useState } from "react";
import ModalVideo from "../Modal-2";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

export const SectionTree: React.FC = () => {
  const icons = [<BiLogoJavascript />, <BiLogoHtml5 />, <BiLogoCss3 />];

  const [selectedExperienceModalIndex, setSelectedExperienceModalIndex] =
    useState<number | null>(null);

  const [selectedProjectsModalIndex, setSelectedProjectsModalIndex] = useState<
    number | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionTreeRef = useRef<HTMLDivElement | null>(null);

  const isProjectsVisible = useIntersectionObserver(sectionTreeRef);

  const openModal = (index: number, section: string) => {
    if (section === "experience") {
      setSelectedExperienceModalIndex(index);
    } else if (section === "projects") {
      setSelectedProjectsModalIndex(index);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // renderizando Cards
  const renderCards = (
    data: {
      title: string;
      description: string;
    }[],
    section: string
  ) => {
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

  //renderizando modais

  return (
    <>
      <SessionTreeContainer ref={sectionTreeRef}>
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

      {texts.sectionTree.modalVideoExperience.map((modalData, index) => (
        <ModalVideo
          key={index} // Certifique-se de definir uma chave única
          title={modalData.title}
          description={modalData.description}
          videoUrl={modalData.url}
          closeModal={closeModal}
          isOpen={isModalOpen && selectedExperienceModalIndex === index}
        />
      ))}

      {texts.sectionTree.modalVideoAllProjects.map((modalData, index) => (
        <ModalVideo
          key={index} // Certifique-se de definir uma chave única
          title={modalData.title}
          description={modalData.description}
          videoUrl={modalData.url}
          closeModal={closeModal}
          isOpen={isModalOpen && selectedProjectsModalIndex === index}
        />
      ))}
    </>
  );
};

export default SectionTree;
