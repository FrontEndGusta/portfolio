import texts from "../../utils/texts";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import Card from "../Card";
import image1 from "../../assets/avatar.jpeg";
import { SessionTreeContainer } from "./styles";
import { useState } from "react";
import ModalVideo from "../Modal-2";

export const SectionTree: React.FC = () => {
  const icons = [<BiLogoJavascript />, <BiLogoHtml5 />, <BiLogoCss3 />];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <SessionTreeContainer>
        <div className="AllProjects">
          <h2>Experiências</h2>
          <div className="containerCards">
            <Card
              title={texts.sectionTwo.card[0].title}
              imageUrl={image1}
              info={texts.sectionTwo.card[0].description}
              icons={icons}
              onViewMoreClick={openModal}
            />
            <Card
              title={texts.sectionTwo.card[1].title}
              imageUrl={image1}
              info={texts.sectionTwo.card[1].description}
              icons={icons}
              onViewMoreClick={openModal}
            />
          </div>
          <h2>{texts.sectionTree.projects.title}</h2>
        </div>
      </SessionTreeContainer>
      <ModalVideo
        title={texts.sectionTwo.modalVideo[0].title}
        description={texts.sectionTwo.modalVideo[0].description}
        videoUrl={texts.sectionTwo.modalVideo[0].url}
        closeModal={closeModal}
        isOpen={isModalOpen} // Passa o estado para o ModalVideo
      />
      ;
    </>
  );
};

export default SectionTree;
