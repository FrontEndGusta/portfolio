import Card from "components/CardProjects";
import ModalVideo from "components/ModalProjects";
import useIntersectionObserver from "utils/useIntersectionObserver";
import { SessionTreeContainer } from "./styles";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import components from "utils/useComponent";
import LoadingCards from "./components/LoadingCards";
import useApi from "services/useApi";

interface sectionThreeProps {
  sectionThreeRef: React.RefObject<HTMLDivElement>;
}
// Interface para os dados de um card
interface CardData {
  title: string;
  images?: { icon: string }[];
  component?: React.ReactNode;
  icons?: React.ReactNode[];
  viewMore?: boolean;
}

// Interface para os dados de um modal de vídeo
interface ModalVideoData {
  title: string;
  description: string;
  images?: string;
}

interface SectionThreeData {
  titleHighlights: {
    title: string;
  };
  cardsHighlights: CardData[];
  titleAllProjects: {
    title: string;
  };
  cardsAllProjects: CardData[];
  modalVideoHighlights: ModalVideoData[];
  modalVideoAllProjects: ModalVideoData[];
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

  const { data, isLoading } = useApi<SectionThreeData>("/sectionTree");

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
      const { icons, imagesCards, customComponent } =
        getCardComponents(cardData);

      return (
        <div
          className={`hidden ${isProjectsVisible ? "show" : ""}`}
          style={{ transitionDelay: `${index * 300}ms` }}
          key={index}
        >
          <Card
            title={cardData.title}
            imageUrl={imagesCards}
            icons={icons || []} // Use os ícones correspondentes ou um array vazio se não houver correspondência
            customComponent={customComponent}
            showViewMoreButton={cardData.viewMore}
            onViewMoreClick={() => openModal(index, section)}
          />
        </div>
      );
    });
  };

  // Função auxiliar para obter componentes do cartão
  const getCardComponents = (cardData: CardData) => {
    const icons =
      typeof cardData.icons === "string"
        ? components.icons[cardData.icons]
        : undefined;
    const imagesCards =
      typeof cardData.images === "string"
        ? components.imagesCards[cardData.images]
        : undefined;
    const customComponent =
      typeof cardData.component === "string"
        ? components.customComponent[cardData.component]
        : undefined;

    return { icons, imagesCards, customComponent };
  };

  const renderModalVideos = (
    modalDataArray: ModalVideoData[] | null,
    isOpen: boolean,
    index: number | null
  ) => {
    if (isOpen && index !== null && modalDataArray && modalDataArray[index]) {
      const modalData = modalDataArray[index];
      const images =
        typeof modalData.images === "string"
          ? components.imagesModais[modalData.images]
          : [];
      // Check if modalDataArray is not null before accessing its properties
      return (
        <ModalVideo
          title={modalDataArray[index]?.title || ""}
          description={modalDataArray[index]?.description || ""}
          images={images || []}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      );
    }
    return null;
  };

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
