import Card from "components/CardProjects";
import ModalVideo from "components/ModalProjects";
import useIntersectionObserver from "utils/useIntersectionObserver";
import { useState } from "react";
import components from "utils/useComponent";

import useApi from "services/useApi";
import {
  CardData,
  ModalVideoData,
  SectionThreeData,
} from "./useSectionThree.types";

export const useSectionThree = (
  sectionThreeRef: React.RefObject<HTMLDivElement>
) => {
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

  const renderCards = (data: CardData[], section: string) => {
    return (
      data &&
      data.map((cardData, index) => {
        const { icons, imagesCards, customComponent } =
          getCardComponents(cardData);

        return (
          <div
            className={isProjectsVisible ? "show" : "hidden"}
            style={{
              transitionDelay: `${index * 300}ms`,
            }}
            key={index}
          >
            <Card
              title={cardData.title}
              imageUrl={imagesCards}
              icons={icons || []}
              customComponent={customComponent}
              showViewMoreButton={cardData.viewMore}
              onViewMoreClick={() => openModal(index, section)}
            />
          </div>
        );
      })
    );
  };

  const getCardComponents = (cardData: CardData) => {
    const icons =
      typeof cardData.icons === "string"
        ? components.icons[cardData.icons]
        : cardData.icons;
  
    const imagesCards =
      typeof cardData.images === "string"
        ? components.imagesCards[cardData.images]
        : cardData.images;
  
    const customComponent =
      typeof cardData.component === "string"
        ? components.customComponent[cardData.component]
        : cardData.component;
  
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
      return (
        <ModalVideo
          title={modalDataArray[index]?.title || ""}
          description={modalDataArray[index]?.description || ""}
          images={images || []}
          projectLink={modalDataArray[index]?.projectLink}
          repositoryLink={modalDataArray[index]?.repositoryLink}
          LinkedInLink={modalDataArray[index]?.LinkedInLink}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      );
    }
    return null;
  };

  return {
    isLoading,
    data,
    isExperienceModalOpen,
    experienceModalIndex,
    isProjectsModalOpen,
    projectsModalIndex,
    isProjectsVisible,
    sectionThreeRef,
    renderCards,
    renderModalVideos,
  };
};
