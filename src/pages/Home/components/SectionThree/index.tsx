import Card from "components/CardProjects";
import ModalVideo from "components/ModalProjects";
import useIntersectionObserver from "utils/useIntersectionObserver";
import { SessionTreeContainer } from "./styles";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import components from "utils/useComponent";
import LoadingCards from "./components/LoadingCards";

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
  images?: string;
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
  console.log("isProjectsVisible:", isProjectsVisible);

  const { data, error, isLoading } = useQuery("sectionData", async () => {
    // const delayDuration = 5000; // 5 segundos em milissegundos
    // await new Promise((resolve) => setTimeout(resolve, delayDuration));
    const response = await axios.get(
      "https://backend-portfolio-g7yl.onrender.com/sectionTree"
    );
    return response.data;
  });

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
      const icons =
        typeof cardData.icons === "string"
          ? components.icons[cardData.icons]
          : undefined;

      return (
        <div
         className={`hidden ${isProjectsVisible ? "show" : ""}`}
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
          : []
      // Check if modalDataArray is not null before accessing its properties
      return (
        <ModalVideo
          title={modalDataArray[index]?.title || ""}
          description={modalDataArray[index]?.description || ""}
          images={images}
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
          <section >
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
