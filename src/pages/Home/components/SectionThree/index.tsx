import Card from "components/CardProjects";
import ModalVideo from "components/ModalProjects";
import texts from "utils/texts";
import useIntersectionObserver from "utils/useIntersectionObserver";
import { SessionTreeContainer } from "./styles";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import components from "utils/useComponent";

interface sectionThreeProps {
  sectionThreeRef: React.RefObject<HTMLDivElement>;
}
// Interface para os dados de um card
interface CardData {
  title: string;
  images?: string;
  component?: React.ReactNode;
  icons?: React.ReactNode[];
  viewMore?: boolean;
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
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [experienceModalIndex, setExperienceModalIndex] = useState<
    number | null
  >(null);

  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [projectsModalIndex, setProjectsModalIndex] = useState<number | null>(
    null
  );

  const isProjectsVisible = useIntersectionObserver(sectionThreeRef);

  const fetchData = async () => {
    return axios
      .get("https://backend-portfolio-g7yl.onrender.com/sectionTree")
      .then((response) => response.data);
      console.log(data)
  };

  const { data, error, isLoading } = useQuery("sectionTree", fetchData);
  console.log(data)
  if (isLoading) {
    return <p>carrregando...</p>;
  }

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
    return data.map((cardData, index) => {
      // Verifique se a propriedade icons está presente e se há um componente correspondente em components.icons
      const icons = typeof cardData.icons === 'string' ? components.icons[cardData.icons] : undefined;
  
      return (
        <div
          className="hidden"
          style={{ transitionDelay: `${index * 300}ms` }}
          key={index}
        >
          <Card
            title={cardData.title}
            imageUrl={cardData.images}
            icons={icons || []} // Use os ícones correspondentes ou um array vazio se não houver correspondência
            customComponent={components.projects}
            showViewMoreButton={cardData.viewMore}
            onViewMoreClick={() => openModal(index, section)}
          />
        </div>
      );
    });
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
        <h2>Experiências</h2>
        <div className="containerCards">
          {renderCards(data.cardExperience, "experience")}
        </div>

        <h2>{data.projects.title}</h2>
        <div className="containerCards">
          {renderCards(data.cardsProjects, "projects")}
        </div>
      </SessionTreeContainer>

      {renderModalVideos(
        data.modalVideoExperience,
        isExperienceModalOpen,
        experienceModalIndex
      )}
      {renderModalVideos(
        data.modalVideoAllProjects,
        isProjectsModalOpen,
        projectsModalIndex
      )}
    </>
  );
};

export default SectionThree;
